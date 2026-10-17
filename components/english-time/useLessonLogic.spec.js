// components/english-time/useLessonLogic.spec.js
import { describe, it, expect, beforeEach, vi } from 'vitest'

// 🔑 vi.hoisted — доступен внутри vi.mock (который поднимается наверх файла)
const { mockStorage } = vi.hoisted(() => ({
    mockStorage: {}
}))

vi.mock('@/composables/useLocalStorage', () => ({
    useLocalStorage: (key, defaultValue) => ({
        get value() {
            return mockStorage[key] ?? defaultValue
        },
        set value(val) {
            mockStorage[key] = val
        }
    })
}))

vi.mock('@/composables/useShuffle', () => ({
    useShuffle: () => ({
        shuffle: (arr) => [...arr] // без перемешивания для предсказуемости
    })
}))

vi.mock('./lesson1.js', () => ({
    default: {
        mixQuestions: false,
        questions: [
            {
                id: 1,
                question: 'Вопрос 1',
                good: 'Правильный ответ 1',
                description: 'Описание 1',
                answers: ['Правильный ответ 1', 'Неправильный 1', 'Неправильный 2']
            },
            {
                id: 2,
                question: 'Вопрос 2',
                good: ['Ответ A', 'Ответ B'],
                description: 'Описание 2',
                answers: ['Ответ A', 'Ответ B', 'Ответ C']
            },
            {
                id: 3,
                question: 'Вопрос 3',
                good: 'Правильный ответ 3',
                description: 'Описание 3',
                answers: ['Правильный ответ 3', 'Неправильный 3']
            }
        ]
    }
}))

import { useLessonLogic } from './useLessonLogic'

describe('useLessonLogic', () => {
    let logic

    beforeEach(() => {
        // Очищаем mock-storage перед каждым тестом
        Object.keys(mockStorage).forEach((k) => delete mockStorage[k])
        logic = useLessonLogic()
        logic.initLessons()
    })

    describe('initLessons', () => {
        it('должен инициализировать уроки из данных, если localStorage пуст', () => {
            expect(logic.lessons.value.length).toBe(3)
            expect(logic.lessonsCount.value).toBe(3)
            expect(logic.index.value).toBe(0)
        })

        it('должен подготовить первый вопрос после инициализации', () => {
            expect(logic.question.value).toBe('Вопрос 1')
            expect(logic.goodAnswer.value).toBe('Правильный ответ 1')
            expect(logic.description.value).toBe('Описание 1')
            expect(logic.answers.value).toEqual([
                'Правильный ответ 1',
                'Неправильный 1',
                'Неправильный 2'
            ])
        })

        it('должен установить флаги в исходное состояние', () => {
            expect(logic.flagContinue.value).toBe(true)
            expect(logic.flagLessonOk.value).toBe(true)
            expect(logic.flagBadResult.value).toBe(false)
        })
    })

    describe('prepareQuestion', () => {
        it('должен загрузить данные текущего вопроса', () => {
            logic.index.value = 1
            logic.prepareQuestion()
            expect(logic.question.value).toBe('Вопрос 2')
            expect(logic.goodAnswer.value).toEqual(['Ответ A', 'Ответ B'])
            expect(logic.answers.value).toEqual(['Ответ A', 'Ответ B', 'Ответ C'])
        })

        it('должен сбросить флаги при подготовке вопроса', () => {
            logic.flagBadResult.value = true
            logic.flagLessonOk.value = false
            logic.prepareQuestion()
            expect(logic.flagContinue.value).toBe(true)
            expect(logic.flagLessonOk.value).toBe(true)
            expect(logic.flagBadResult.value).toBe(false)
        })
    })

    describe('checkResult - правильные ответы', () => {
        it('должен принять правильный одиночный ответ', () => {
            logic.checkResult(['Правильный ответ 1'])
            expect(logic.flagLessonOk.value).toBe(true)
            expect(logic.flagBadResult.value).toBe(false)
            expect(logic.flagContinue.value).toBe(false)
            expect(logic.errorsCount.value).toBe(0)
        })

        it('должен принять правильный множественный ответ', () => {
            logic.index.value = 1
            logic.prepareQuestion()
            logic.checkResult(['Ответ A', 'Ответ B'])
            expect(logic.flagLessonOk.value).toBe(true)
            expect(logic.errorsCount.value).toBe(0)
        })

        it('должен удалить отвеченный вопрос из списка уроков', () => {
            const initialLength = logic.lessons.value.length
            logic.checkResult(['Правильный ответ 1'])
            expect(logic.lessons.value.length).toBe(initialLength - 1)
            expect(logic.lessons.value.find((q) => q.id === 1)).toBeUndefined()
        })

        it('должен уменьшить lessonsCount после правильного ответа', () => {
            logic.checkResult(['Правильный ответ 1'])
            expect(logic.lessonsCount.value).toBe(2)
        })
    })

    describe('checkResult - неправильные ответы', () => {
        it('должен отклонить неправильный одиночный ответ', () => {
            logic.checkResult(['Неправильный 1'])
            expect(logic.flagLessonOk.value).toBe(false)
            expect(logic.flagBadResult.value).toBe(true)
            expect(logic.flagContinue.value).toBe(true)
            expect(logic.errorsCount.value).toBe(1)
        })

        it('должен отклонить неполный множественный ответ', () => {
            logic.index.value = 1
            logic.prepareQuestion()
            logic.checkResult(['Ответ A'])
            expect(logic.flagLessonOk.value).toBe(false)
            expect(logic.errorsCount.value).toBe(1)
        })

        it('должен отклонить ответ с лишними вариантами', () => {
            logic.index.value = 1
            logic.prepareQuestion()
            logic.checkResult(['Ответ A', 'Ответ B', 'Ответ C'])
            expect(logic.flagLessonOk.value).toBe(false)
            expect(logic.errorsCount.value).toBe(1)
        })

        it('должен увеличить errorsCount при каждой ошибке', () => {
            logic.checkResult(['Неправильный 1']) // ошибка на вопросе 1
            logic.checkResult(['Неправильный 1']) // ошибка на вопросе 2 (index сдвинулся)
            expect(logic.errorsCount.value).toBe(2)
        })

        it('должен добавить вопрос в questionBad при ошибке', () => {
            logic.checkResult(['Неправильный 1'])
            expect(logic.questionBad.value.length).toBe(1)
            expect(logic.questionBad.value[0]).toBe('Вопрос 1')
        })

        it('должен перейти к следующему вопросу при ошибке', () => {
            logic.checkResult(['Неправильный 1'])
            expect(logic.index.value).toBe(1)
        })

        it('должен сбросить index на 0, если достигнут конец списка', () => {
            logic.lessons.value = [logic.lessons.value[0]] // только 1 вопрос
            logic.index.value = 0
            logic.checkResult(['Неправильный 1'])
            expect(logic.index.value).toBe(0)
        })
    })

    describe('nextQuestion', () => {
        it('должен подготовить следующий вопрос', () => {
            logic.index.value = 1
            logic.nextQuestion()
            expect(logic.question.value).toBe('Вопрос 2')
        })

        it('должен сбросить flagCheckResultat', () => {
            logic.flagCheckResultat.value = true
            logic.nextQuestion()
            expect(logic.flagCheckResultat.value).toBe(false)
        })

        // ✅ ИСПРАВЛЕННЫЙ ТЕСТ: проверяем эффект, а не вызов spy
        it('должен сбросить состояние, если уроков нет', () => {
            // Портим состояние
            logic.errorsCount.value = 5
            logic.index.value = 2
            logic.questionBad.value.push('старый вопрос')
            logic.lessons.value = []

            logic.nextQuestion()

            // Проверяем эффекты resetLessons
            expect(logic.errorsCount.value).toBe(0)
            expect(logic.index.value).toBe(0)
            expect(logic.questionBad.value).toEqual([])
            expect(logic.lessons.value.length).toBe(3) // восстановились из данных
        })
    })

    describe('resetLessons', () => {
        it('должен сбросить все счётчики и состояние', () => {
            logic.checkResult(['Неправильный 1'])
            logic.checkResult(['Неправильный 1'])

            logic.resetLessons()

            expect(logic.errorsCount.value).toBe(0)
            expect(logic.index.value).toBe(0)
            expect(logic.questionBad.value).toEqual([])
            expect(logic.questionBadFlag.value).toBe(false)
            expect(logic.flagContinue.value).toBe(true)
            expect(logic.flagCheckResultat.value).toBe(false)
            expect(logic.flagBadResult.value).toBe(false)
        })

        it('должен восстановить полный список вопросов', () => {
            logic.checkResult(['Правильный ответ 1'])
            expect(logic.lessons.value.length).toBe(2)

            logic.resetLessons()
            expect(logic.lessons.value.length).toBe(3)
        })
    })

    describe('saveDataToStorage', () => {
        it('должен сохранить ID оставшихся вопросов', () => {
            logic.checkResult(['Правильный ответ 1'])

            const saved = JSON.parse(logic.levelsForTrainingString.value)
            expect(saved).toEqual([2, 3])
        })

        it('должен сохранить количество ошибок', () => {
            logic.checkResult(['Неправильный 1'])

            expect(logic.levelErrorsCountString.value).toBe('1')
        })
    })

    describe('работа с localStorage', () => {
        it('должен загрузить уроки по сохранённым ID', () => {
            mockStorage['levels-for-training'] = JSON.stringify([1, 3])

            const customLogic = useLessonLogic()
            customLogic.initLessons()

            expect(customLogic.lessons.value.length).toBe(2)
            expect(customLogic.lessons.value.map((q) => q.id)).toEqual([1, 3])
        })

        it('должен загрузить сохранённое количество ошибок', () => {
            mockStorage['level-error-count'] = '5'

            const customLogic = useLessonLogic()
            customLogic.initLessons()

            expect(customLogic.errorsCount.value).toBe(5)
        })
    })

    describe('граничные случаи', () => {
        it('должен корректно обрабатывать пустой массив ответов', () => {
            logic.checkResult([])
            expect(logic.flagLessonOk.value).toBe(false)
            expect(logic.errorsCount.value).toBe(1)
        })

        it('должен корректно обрабатывать пустой список уроков', () => {
            const emptyLogic = useLessonLogic({ questions: [], mixQuestions: false })
            emptyLogic.initLessons()
            expect(emptyLogic.lessons.value.length).toBe(0)
            expect(emptyLogic.lessonsCount.value).toBe(0)
        })

        it('должен корректно обрабатывать невалидный JSON в localStorage', () => {
            mockStorage['levels-for-training'] = 'invalid json'

            const customLogic = useLessonLogic()
            expect(() => customLogic.initLessons()).not.toThrow()
            expect(customLogic.lessons.value.length).toBe(3)
        })
    })
})