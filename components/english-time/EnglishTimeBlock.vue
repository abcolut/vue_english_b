<template>
    <h2 class="text-center">English B</h2>

    <div class="ma-2 pa-4">
        <v-row>
            <v-col cols="11">
                <h3 class="text-center" data-testid="text-question">{{ question }}</h3>
            </v-col>

            <v-col cols="1">
                <span class="text-right" title="Обнулить счетчик заданий">
                    <v-btn @click="resetLessons" class="ma-2 pa-2" data-testid="button-reset-game">
                        <span class="pl-2" data-testid="lesson-counter">{{ lessonsCount }}</span>
                        <span class="text-alert" v-if="errorsCount" data-testid="error-counter">({{ errorsCount
                        }})</span>
                    </v-btn>
                </span>
            </v-col>
        </v-row>

        <div v-if="flagContinue && lessonsCount === 0" data-testid="answer-the-end-block">
            <h3 class="text-center" data-testid="text-game-over">Заданий больше нет</h3>
            <div class="text-center">
                <v-btn @click="resetLessons" data-testid="button-play-again">
                    Начать заниматься заново
                </v-btn>
            </div>
        </div>

        <!-- Блок с вариантами ответов -->
        <div class="centerBlock" v-if="!flagBadResult && flagContinue" data-testid="answer-variants-block">
            <div class="centerBlock2">
                <v-row v-if="lessonsCount > 0 && flagContinue">
                    <v-col>
                        <h3 class="text-center">Выбор вариантов ответа (может быть несколько):</h3>
                        <ul class="tags" data-testid="list-answers">
                            <li v-for="(x, i) of answersStatus" :key="'ket' + i" @click="selectTime(i)"
                                :style="timesStyle(i)" class="pointer" data-testid="answer-item">
                                {{ x.value }}
                            </li>
                        </ul>

                    </v-col>
                </v-row>

                <div class="text-center" v-if="lessonsCount > 0">
                    <v-btn @click="prepareCheckResult" class="mb-4 ml-4" color="info" data-testid="button-check"
                        v-if="!flagCheckResultat && selectTimeText">
                        Проверить
                    </v-btn>

                    <v-btn @click="prepareCheckResult" class="mb-4 ml-4" color="secondary" data-testid="button-prompt"
                        v-if="flagContinue">
                        Подсказка
                    </v-btn>
                </div>
            </div>
        </div>
        <div v-else>
            <h3 class="text-center" data-testid="result-text" v-if="selectTimeText">Ваш выбор: {{ selectTimeText }}</h3>
        </div>

        <div v-if="flagBadResult" data-testid="block-correct-answer">
            <lazy-english-time-info-block :title="'Попробуйте ещё'" type="warning"
                :message="goodAnswer + ' (' + description + ')'" @ok="nextQuestionInterface"
                button-text="Следующее упражнение" data-testid="block-correct-answer2" />
        </div>


        <LazyEnglishTimeInfoBlock v-if="!flagContinue" :title="'Вы справились'"
            :message="description + ' (' + goodAnswerText() + ')'" type="info" button-text="Следующее упражнение"
            @ok="nextQuestionInterface" data-testid="block-success" :time-out="10000" />


        <div @click="flagHelpers = true" class="pointer mt-3" v-if="!flagHelpers" data-testid="block-hint-show">
            Подсказка
        </div>
        <div v-else data-testid="help-block">
            <LazyEnglishTimeHelpBlock />
            <div @click="flagHelpers = false" class="pointer  mt-3" data-testid="block-hint-hide-button">Убрать
                подсказку</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLessonLogic } from './useLessonLogic'
import type { IQuestion, IAnswerStatus } from "./types.js"

const flagHelpers = ref(false)
const answersStatus = ref<IAnswerStatus[]>([])
const selectTimeText = ref('')

const {
    lessons,
    index,
    errorsCount,
    lessonsCount,
    flagContinue,
    flagCheckResultat,
    flagBadResult,
    goodAnswer,
    description,
    question,
    answers,
    initLessons,
    resetLessons,
    checkResult,
    nextQuestion,
    // prepareQuestion,
} = useLessonLogic()

const prepareCheckResult = () => {
    const ar = answersStatus.value.filter(x => x.select).map(x => x.value)
    checkResult(ar)
}

const goodAnswerText = () => {
    if (Array.isArray(goodAnswer.value)) { return goodAnswer.value.join(', ') }
    else if (typeof goodAnswer.value == "string") { return goodAnswer.value }
    else { return "Ошибка типов" }
}


watch(answers, (newValue) => {
    resetAnswersStatus()
}, { deep: true })

const resetAnswersStatus = () => {
    answersStatus.value = []
    answers.value.forEach(x => { answersStatus.value.push({ value: x, select: false, right: false, }) })
    answersStatus.value.forEach((x, i, obj) => {
        x.select = false
        if (goodAnswer.value) {
            if (goodAnswer.value.indexOf(x.value) > -1) { x.right = true }
            else { x.right = false }
        }
        x.select = false
    })
    answersStatus.value = [...answersStatus.value]
}

const nextQuestionInterface = () => {
    selectTimeText.value = ""
    nextQuestion()
}

const selectTime = (i: number) => {
    selectTimeText.value = ""
    if (!flagContinue) return
    if (answersStatus.value[i]) {
        answersStatus.value[i].select = !answersStatus.value[i].select
    }
    answersStatus.value = [...answersStatus.value]

    if (flagCheckResultat.value) {
        prepareCheckResult()
    }
    let ar = <String[]>[]
    answersStatus.value.forEach(x => {
        if (x.select) { ar.push(x.value) }
    })
    selectTimeText.value = ar.join(", ")
}

const timesStyle = (i: number) => {
    if (!flagCheckResultat.value) {
        if (answersStatus.value[i]) {
            if (answersStatus.value[i].select) return { color: 'green' }
        }
    } else {
        if (answersStatus.value[i]) {
            if (answersStatus.value[i].select == false) return { color: 'black' }
            if (answersStatus.value[i].right == false) return { color: 'brown' }
            else return { color: 'green' }
        }
    }
}

onMounted(() => {
    initLessons()
})

</script>


<style>
body {
    font-size: large;
}

.tags {
    font-size: unset;
}

.pointer {
    cursor: pointer;
    text-decoration: underline;
}

.text-alert {
    color: brown;
    margin-left: 10px;
    margin-right: 10px;
}

.centerBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.centerBlock2 {
    width: 600px;
    padding: 5px;
}
</style>