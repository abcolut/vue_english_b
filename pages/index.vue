<template>
    <div class="pa-4">
        <h3 class="text-center"> Pet проекты и заготовки кода на VUE</h3>
        <ul>
            <li><router-link to="/english">English-B карточки</router-link> </li>
            <li><router-link to="/markdown-parser">Парсинг markdown файла и формирование JSON файла для проекта
                    Карточки</router-link>
            </li>
            <li><router-link to="/storage">Использование Storage</router-link></li>
            <li><router-link to="/vuetify">Vuetify заготовки</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// Имя пользователя будет сохранено в localStorage после ввода
const username = useLocalStorage<string>('chat-username', '')

const updateName = (newName: string) => {
    username.value = newName
}



</script>
