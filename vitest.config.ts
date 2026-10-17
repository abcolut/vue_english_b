// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        environmentOptions: {
            nuxt: {
                domEnvironment: 'happy-dom',
                // Добавляем настройки для более быстрой инициализации
                overrides: {
                    // Отключаем ненужные для тестов модули
                    modules: [],
                }
            }
        },
        // Увеличиваем таймаут для инициализации
        hookTimeout: 10000,
        // Настройка для более стабильной работы
        setupFiles: [],
        globals: true,
        // Исключаем папки, которые не нужно тестировать
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.nuxt/**',
            '**/.output/**',
        ]
    }
})