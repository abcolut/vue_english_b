import { ref, computed } from 'vue'
import { useLocalStorage } from '@/composables/useLocalStorage' // твой существующий
import lessonData from "./lesson1.js" // твои данные
import type { IQuestion, IAnswerStatus, ILesson } from "./types.js"
import { useShuffle } from '@/composables/useShuffle'
const { shuffle } = useShuffle()

export const useLessonLogic = (data = lessonData) => {
    const lessons = ref<IQuestion[]>([])
    const index = ref(0)
    const errorsCount = ref(0)
    const flagContinue = ref(true)
    const flagCheckResultat = ref(false)
    const description = ref()
    const goodAnswer = ref<string | string[]>()
    const exercise = ref()
    const lessonsCount = ref()
    const question = ref() // list of questions
    const answers = ref<string[]>([]) // list of answers
    const questionBad = ref<String[]>([]) // list of bad question for statistic
    const questionBadFlag = ref(false)
    const flagLessonOk = ref(false)
    const flagBadResult = ref(false)
    const levelsForTrainingString = useLocalStorage<string>('levels-for-training', '[]')
    const levelErrorsCountString = useLocalStorage<string>('level-error-count', '0')
    const maxErrorCountForReplay = 3 // количество плохих попыток, прежде чем будет повторение


    const initLessons = () => {
        let levelsForTraining: any[] = []
        if (levelsForTrainingString.value) {
            try {
                levelsForTraining = JSON.parse(levelsForTrainingString.value)
            } catch {
                levelsForTraining = []
            }
        }

        if (levelsForTraining.length > 0) {
            // lessons.value = lessonData.questions.filter(q => levelsForTraining.includes(q.id))
            lessons.value = data.questions.filter(q => levelsForTraining.includes(q.id))
        } else {
            // lessons.value = [...lessonData.questions]
            lessons.value = [...data.questions]
        }

        if (lessonData.mixQuestions) {
            lessons.value = shuffle(lessons.value)
        }

        if (levelErrorsCountString.value) {
            errorsCount.value = Number(levelErrorsCountString.value)
        }
        prepareQuestion()
    }


    const prepareQuestion = () => {
        exercise.value = lessons.value[index.value]
        question.value = lessons.value[index.value]?.question
        goodAnswer.value = lessons.value[index.value]?.good
        description.value = lessons.value[index.value]?.description
        answers.value = lessons.value[index.value]?.answers ?? []

        flagContinue.value = true
        flagLessonOk.value = true
        flagBadResult.value = false
        lessonsCount.value = lessons.value.length
    }

    const resetLessons = () => {
        errorsCount.value = 0
        index.value = 0
        lessons.value = shuffle(lessonData.questions)
        lessonsCount.value = lessons.value.length
        prepareQuestion()
        questionBad.value = []
        questionBadFlag.value = false

        flagContinue.value = true
        flagCheckResultat.value = false
        flagBadResult.value = false
    }

    const checkResult = (ar: string[]) => {
        let bad = 0;

        if (Array.isArray(goodAnswer.value)) {
            // множественный ответ
            goodAnswer.value.forEach(x => {
                if (!ar.includes(x)) bad++
            })
            ar.forEach(x => {
                if (!goodAnswer.value?.includes(x)) bad++
            })
        } else {
            // одиночный ответ — сравниваем как строку
            if (ar.length !== 1 || ar[0] !== goodAnswer.value) bad++
        }

        if (bad) {
            flagContinue.value = true
            flagLessonOk.value = false
            flagBadResult.value = true
            errorsCount.value++
        } else {
            flagContinue.value = false
            flagLessonOk.value = true
            flagBadResult.value = false
        }

        if (!flagLessonOk.value) {
            questionBad.value.push('' + lessons.value[index.value]?.question)
            index.value++
            if (index.value > maxErrorCountForReplay || index.value >= lessons.value.length) {
                index.value = 0
            }
        } else {
            lessons.value = lessons.value.filter(x => x.id != lessons.value[index.value]?.id)
        }
        if (index.value >= lessons.value.length) { index.value = 0 }

        saveDataToStorage()
    }



    const checkResult2 = (ar: string[]) => {
        let bad = 0;
        if (typeof goodAnswer.value === 'object') {
            goodAnswer.value.forEach(x => {
                if (ar.indexOf(x) == -1) bad++
            });
        }

        ar.forEach(x => {
            if (typeof goodAnswer.value === 'object' && goodAnswer.value.indexOf(x) == -1) bad++
        });

        if (bad) {
            flagContinue.value = true
            flagLessonOk.value = false
            flagBadResult.value = true
            errorsCount.value++
        } else {
            flagContinue.value = false
            flagLessonOk.value = true
            flagBadResult.value = false
        }

        if (!flagLessonOk.value) {
            questionBad.value.push("" + lessons.value[index.value]?.question)
            index.value++
            if (index.value > maxErrorCountForReplay || index.value >= lessons.value.length) { index.value = 0 }
        } else {
            lessons.value = lessons.value.filter(x => x.id != lessons.value[index.value]?.id)
        }
        if (index.value >= lessons.value.length) { index.value = 0 }

        saveDataToStorage()
    }

    const saveDataToStorage = () => {
        let ar: number[] = []
        lessons.value.forEach(x => ar.push(x.id))
        const s = JSON.stringify(ar)
        levelsForTrainingString.value = s
        levelErrorsCountString.value = String(errorsCount.value)
        lessonsCount.value = lessons.value.length
    }

    const nextQuestion = () => {
        flagCheckResultat.value = false
        if (lessons.value.length === 0) {   // ← было lessonData.questions.length
            resetLessons()
        }
        prepareQuestion()
    }

    return {
        lessons,
        index,
        errorsCount,
        flagContinue,
        flagCheckResultat,
        flagBadResult,
        flagLessonOk,              // ← добавить
        questionBad,               // ← добавить
        questionBadFlag,           // ← добавить
        goodAnswer,
        description,
        question,
        answers,
        lessonsCount,
        levelsForTrainingString,   // ← добавить (тесты обращаются)
        levelErrorsCountString,    // ← добавить (тесты обращаются)
        initLessons,
        resetLessons,
        checkResult,
        nextQuestion,
        prepareQuestion,
    }
}
