<script setup lang="ts">

const props = defineProps<{
    type: "info" | "warning" | "error" | "success" | undefined;
    title?: string;
    message?: string;
    buttonText?: string;
    timeOut?: number;
}>()


const emit = defineEmits<{
    (e: 'ok'): void
    (e: 'ok', payload: string): void // если хочешь передавать данные
}>()

const handleOk = () => {
    emit('ok', 'ok')
}

let timerEmit: NodeJS.Timeout | null = null

const typeAlert = ref()
const buttonTextAlert = ref()
const titleText = ref()
onMounted(() => {
    if (props.timeOut) {
        timerEmit = setTimeout(() => {
            emit("ok")
        }, props.timeOut)
    }
    if (props.type) { typeAlert.value = props.type } else { typeAlert.value = "info" }
    if (props.buttonText) { buttonTextAlert.value = props.buttonText } else { buttonTextAlert.value = "ok" }
    if (props.title) { titleText.value = props.title } else { titleText.value = "" }
})

onUnmounted(() => {
    if (timerEmit) {
        clearTimeout(timerEmit)
    }
})

</script>

<template>
    <v-alert class="info-block" :type="typeAlert" :title="titleText" elevation="2" variant="text" data-testid="v-alert">

        <v-row class="m-4 mb-2">
            <v-col>
                <div class="" data-testid="alert-message-text">{{ message }}</div>
            </v-col>
        </v-row>
        <v-row v-if="buttonText">
            <v-col>
                <div class="text-center">
                    <v-btn @click="handleOk" class="mb-2" color="success" data-testid="alert-ok-button">{{
                        buttonTextAlert }}</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-alert>
</template>
