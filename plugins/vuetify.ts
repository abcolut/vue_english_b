import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Создаем тему (опционально)
const myTheme = {
    dark: false,
    colors: {
        primary: '#1867C0',
        secondary: '#5CBBF6',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myTheme',
        themes: {
            myTheme,
        },
    },
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vuetify)
})