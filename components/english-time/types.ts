export interface ILesson {
    mixQuestions: boolean
    mixAnswers: boolean
    question: IQuestion[]
    prompts: string[]
}

export interface IQuestion {
    id: number
    question: string
    answers?: string[]
    good: string | string[]
    //good: string[]
    tags?: string
    description: string
}

export interface IAnswerStatus {
    value: string
    right: boolean
    select: boolean
}