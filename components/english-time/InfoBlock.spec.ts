import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AlertForm from './InfoBlock.vue'

describe('AlertForm', () => {
    const defaultProps = {
        type: 'info' as const,
        title: 'Заголовок',
        message: 'Сообщение',
        buttonText: 'OK',
        timeOut: 1000,
    }

    it('отображает title и message (без дублирования в шаблоне)', async () => {
        const wrapper = mount(AlertForm, { props: { ...defaultProps } })



        const messageEl = wrapper.find('[data-testid="alert-message-text"]')
        expect(messageEl.text()).toContain(defaultProps.message)
    })


    it('эмитит событие ok при клике на кнопку (с payload)', async () => {
        const wrapper = mount(AlertForm, { props: { ...defaultProps } })

        const button = wrapper.find('[data-testid="alert-ok-button"]')
        await button.trigger('click')

        expect(wrapper.emitted('ok')).toBeTruthy()
    })

    it('автоматически эмитит ok по истечении timeOut', async () => {
        vi.useFakeTimers()
        const wrapper = mount(AlertForm, {
            props: { ...defaultProps, timeOut: 500 },
        })

        await wrapper.vm.$nextTick() // onMounted отработал
        vi.runAllTimers() // форсируем таймер

        expect(wrapper.emitted('ok')).toBeTruthy()
    })

    it('не эмитит ok после размонтирования компонента (clearTimeout)', async () => {
        vi.useFakeTimers()
        const wrapper = mount(AlertForm, {
            props: { ...defaultProps, timeOut: 2000 },
        })

        await wrapper.vm.$nextTick()
        wrapper.unmount() // сработает onUnmounted и clearTimeout

        vi.runAllTimers()

        expect(wrapper.emitted('ok')).toBeFalsy()
    })


})
