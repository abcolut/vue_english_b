// components/english-time/EnglishTime.spec.js
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref, nextTick } from 'vue'

// ============ МОКИ МОДУЛЕЙ (ВАЖНО: до import EnglishTime) ============

vi.mock('./InfoBlock.vue', () => ({
    default: {
        name: 'EnglishTimeInfoBlock',
        inheritAttrs: false,
        props: ['title', 'type', 'message', 'buttonText', 'timeOut'],
        emits: ['ok'],
        template: `
      <div data-testid="info-block" v-bind="$attrs">
        <div data-testid="info-title">{{ title }}</div>
        <div data-testid="info-message">{{ message }}</div>
        <button data-testid="info-ok" @click="$emit('ok')">{{ buttonText }}</button>
      </div>
    `
    }
}))

vi.mock('./HelpBlock.vue', () => ({
    default: {
        name: 'EnglishTimeHelpBlock',
        template: `<div data-testid="help-block">Help block</div>`
    }
}))

// ============ МОК useLessonLogic ============

let mockState

const makeMockState = () => ({
    lessons: ref([]),
    index: ref(0),
    errorsCount: ref(0),
    lessonsCount: ref(0),
    flagContinue: ref(true),
    flagCheckResultat: ref(false),
    flagBadResult: ref(false),
    goodAnswer: ref(''),
    description: ref(''),
    question: ref(''),
    answers: ref([]),
    initLessons: vi.fn(),
    resetLessons: vi.fn(),
    checkResult: vi.fn(),
    nextQuestion: vi.fn(),
    prepareQuestion: vi.fn()
})

vi.mock('./useLessonLogic', () => ({
    useLessonLogic: () => mockState
}))

// ============ ИМПОРТ КОМПОНЕНТА (после моков) ============

import EnglishTime from './EnglishTimeBlock.vue' // ← подставьте реальное имя файла

// ============ ХЕЛПЕРЫ ============

const flush = async () => {
    await nextTick()
    await nextTick()
    await nextTick()
}

const mountComponent = () =>
    mount(EnglishTime, {
        global: {
            stubs: {
                // Vuetify
                'v-row': { template: '<div class="v-row"><slot /></div>' },
                'v-col': { template: '<div class="v-col"><slot /></div>' },
                'v-btn': {
                    props: ['color'],
                    emits: ['click'],
                    template: '<button @click="$emit(\'click\')"><slot /></button>'
                }
            }
        }
    })

const mountWithAnswers = async (answers) => {
    const wrapper = mountComponent()
    await flush()
    mockState.answers.value = [...answers]
    await flush()
    return wrapper
}

// ============ ТЕСТЫ ============

describe('EnglishTime.vue', () => {
    beforeEach(() => {
        mockState = makeMockState()
    })

    describe('инициализация', () => {
        it('должен вызвать initLessons при монтировании', () => {
            mountComponent()
            expect(mockState.initLessons).toHaveBeenCalledTimes(1)
        })

        it('должен отобразить заголовок English B', () => {
            const wrapper = mountComponent()
            expect(wrapper.find('h2').text()).toBe('English B')
        })

        it('должен отобразить вопрос из состояния', async () => {
            mockState.question.value = 'Как переводится cat?'
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="text-question"]').text()).toBe('Как переводится cat?')
        })
    })

    describe('счётчики', () => {
        it('должен отобразить lessonsCount', async () => {
            mockState.lessonsCount.value = 5
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="lesson-counter"]').text()).toBe('5')
        })

        it('должен отобразить errorsCount, если он не 0', async () => {
            mockState.errorsCount.value = 3
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="error-counter"]').text()).toBe('(3)')
        })

        it('не должен отображать errorsCount, если он 0', async () => {
            mockState.errorsCount.value = 0
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="error-counter"]').exists()).toBe(false)
        })
    })

    describe('сообщение "Заданий больше нет"', () => {
        it('должен показать блок, если flagContinue и lessonsCount === 0', async () => {
            mockState.flagContinue.value = true
            mockState.lessonsCount.value = 0
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="text-game-over"]').exists()).toBe(true)
            expect(wrapper.find('[data-testid="button-play-again"]').exists()).toBe(true)
        })

        it('не должен показывать блок, если lessonsCount > 0', async () => {
            mockState.flagContinue.value = true
            mockState.lessonsCount.value = 3
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="text-game-over"]').exists()).toBe(false)
        })

        it('кнопка "Начать заниматься заново" вызывает resetLessons', async () => {
            mockState.flagContinue.value = true
            mockState.lessonsCount.value = 0
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="button-play-again"]').trigger('click')
            expect(mockState.resetLessons).toHaveBeenCalledTimes(1)
        })
    })

    describe('список ответов', () => {
        it('должен отрисовать answersStatus из answers', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat', 'dog', 'bird'])
            const items = wrapper.findAll('[data-testid="answer-item"]')
            expect(items.length).toBe(3)
            expect(items[0].text()).toBe('cat')
            expect(items[1].text()).toBe('dog')
            expect(items[2].text()).toBe('bird')
        })

        it('клик по ответу выделяет его (зелёный)', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat', 'dog'])
            const items = wrapper.findAll('[data-testid="answer-item"]')
            await items[0].trigger('click')
            await flush()
            const freshItems = wrapper.findAll('[data-testid="answer-item"]')
            expect(freshItems[0].attributes('style')).toContain('color: green')
        })

        it('повторный клик снимает выделение', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat', 'dog'])
            let items = wrapper.findAll('[data-testid="answer-item"]')
            await items[0].trigger('click')
            await flush()
            items = wrapper.findAll('[data-testid="answer-item"]')
            await items[0].trigger('click')
            await flush()
            items = wrapper.findAll('[data-testid="answer-item"]')
            const style = items[0].attributes('style') || ''
            expect(style).not.toContain('color: green')
        })

        it('отображает выбранный ответ в "Ваш выбор"', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat', 'dog'])
            const items = wrapper.findAll('[data-testid="answer-item"]')
            await items[0].trigger('click')
            await flush()
            // result-text рендерится в v-else от centerBlock
            mockState.flagContinue.value = false
            await flush()
            expect(wrapper.find('[data-testid="result-text"]').text()).toContain('cat')
        })
    })

    describe('кнопки "Проверить" и "Подсказка"', () => {
        it('кнопка "Проверить" появляется после выбора ответа', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            mockState.flagCheckResultat.value = false
            const wrapper = await mountWithAnswers(['cat'])
            expect(wrapper.find('[data-testid="button-check"]').exists()).toBe(false)

            await wrapper.find('[data-testid="answer-item"]').trigger('click')
            await flush()
            expect(wrapper.find('[data-testid="button-check"]').exists()).toBe(true)
        })

        it('кнопка "Проверить" вызывает checkResult с выбранными ответами', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat', 'dog'])
            const items = wrapper.findAll('[data-testid="answer-item"]')
            await items[0].trigger('click')
            await flush()
            await wrapper.find('[data-testid="button-check"]').trigger('click')
            expect(mockState.checkResult).toHaveBeenCalledWith(['cat'])
        })

        it('кнопка "Подсказка" вызывает checkResult (prepareCheckResult)', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            const wrapper = await mountWithAnswers(['cat'])
            await wrapper.find('[data-testid="button-prompt"]').trigger('click')
            expect(mockState.checkResult).toHaveBeenCalled()
        })
    })

    describe('блок неправильного ответа (flagBadResult)', () => {
        it('должен показать info-block с "Попробуйте ещё"', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            mockState.flagBadResult.value = true
            mockState.goodAnswer.value = 'cat'
            mockState.description.value = 'кот'
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="block-correct-answer"]').exists()).toBe(true)
            expect(wrapper.find('[data-testid="info-title"]').text()).toBe('Попробуйте ещё')
            expect(wrapper.find('[data-testid="info-message"]').text()).toBe('cat (кот)')
        })

        it('событие ok вызывает nextQuestion', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            mockState.flagBadResult.value = true
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="info-ok"]').trigger('click')
            expect(mockState.nextQuestion).toHaveBeenCalledTimes(1)
        })

        it('не должен показывать блок вариантов, если flagBadResult = true', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = true
            mockState.flagBadResult.value = true
            const wrapper = await mountWithAnswers(['cat'])
            expect(wrapper.find('[data-testid="list-answers"]').exists()).toBe(false)
        })
    })

    describe('блок успеха (!flagContinue)', () => {
        it('должен показать info-block с "Вы справились"', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = false
            mockState.flagBadResult.value = false
            mockState.description.value = 'описание'
            mockState.goodAnswer.value = 'cat'
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="info-title"]').text()).toBe('Вы справились')
            expect(wrapper.find('[data-testid="info-message"]').text()).toBe('описание (cat)')
        })

        it('goodAnswerText склеивает массив через запятую', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = false
            mockState.description.value = 'описание'
            mockState.goodAnswer.value = ['cat', 'dog']
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="info-message"]').text()).toBe('описание (cat, dog)')
        })

        it('событие ok вызывает nextQuestion', async () => {
            mockState.lessonsCount.value = 1
            mockState.flagContinue.value = false
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="info-ok"]').trigger('click')
            expect(mockState.nextQuestion).toHaveBeenCalledTimes(1)
        })
    })

    describe('блок подсказки (flagHelpers)', () => {
        it('по умолчанию показывает ссылку "Подсказка"', async () => {
            const wrapper = mountComponent()
            await flush()
            expect(wrapper.find('[data-testid="block-hint-show"]').exists()).toBe(true)
            expect(wrapper.find('[data-testid="block-hint-hide"]').exists()).toBe(false)
        })

        it('клик по "Подсказка" показывает help-block', async () => {
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="block-hint-show"]').trigger('click')
            await flush()
            // expect(wrapper.find('[data-testid="help-block"]').exists()).toBe(true)
            expect(wrapper.find('[data-testid="help-block"]').exists()).toBe(true)
        })

        it('клик "Убрать подсказку" скрывает help-block', async () => {
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="block-hint-show"]').trigger('click')
            await flush()
            // const removeBtn = wrapper
            //     .findAll('div')
            //     .find((d) => d.text().includes('Убрать подсказку'))
            // expect(removeBtn).toBeTruthy()
            // await removeBtn.trigger('click')

            const removeBtn = wrapper.find('[data-testid="block-hint-hide-button"]')
            expect(removeBtn).toBeTruthy()
            await removeBtn.trigger('click')

            // await wrapper.find('[data-testid="block-hint-hide-button"]').trigger('click')
            console.log()
            await flush()
            expect(wrapper.find('[data-testid="help-block"]').exists()).toBe(false)
        })
    })

    describe('resetLessons через кнопку счётчика', () => {
        it('клик по кнопке-счётчику вызывает resetLessons', async () => {
            mockState.lessonsCount.value = 5
            const wrapper = mountComponent()
            await flush()
            await wrapper.find('[data-testid="button-reset-game"]').trigger('click')
            expect(mockState.resetLessons).toHaveBeenCalledTimes(1)
        })
    })
})