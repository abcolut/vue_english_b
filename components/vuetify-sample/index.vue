<template>
    <div>
        <h3 class="text-center">Примеры Vuetify</h3>

        <VCard class="pa-6 ma-4 rounded-lg elevation-2">
            <p class="text-body-1">Текст здесь</p>

            <VRow class="mt-4">
                <VCol cols="12" sm="6">
                    <VBtn color="primary" size="large">
                        Дальше →
                    </VBtn>
                </VCol>
                <VCol cols="12" sm="6">
                    <VBtn color="secondary" size="large">
                        Подсказка 💡
                    </VBtn>
                </VCol>
            </VRow>
        </VCard>

        Иконка
        <v-icon>mdi-home</v-icon>
    </div>

</template>

<script setup lang="ts">
// Имя пользователя будет сохранено в localStorage после ввода
const username = useLocalStorage<string>('chat-username', '')

const updateName = (newName: string) => {
    username.value = newName
}



</script>
