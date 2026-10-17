// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'], // указываем путь к папке со сторами
  },


  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css' // Добавьте иконки
  ],

  build: {
    transpile: ['vuetify'] // Важно для SSR
  },

  ssr: false, // или false, если тебе нужен только SPA

  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }

})
