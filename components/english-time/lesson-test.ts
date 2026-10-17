// tests/fixtures/lesson-fixtures.ts
import type { IQuestion } from "./types.js"

export const mockQuestions: IQuestion[] = [
    {
        id: 1,
        question: "Какой глагол подходит?",
        good: ["go"],
        description: "Пример описания",
        answers: ["go", "went", "gone", "going"],
    },
    {
        id: 2,
        question: "Ещё один вопрос",
        good: ["eat"],
        description: "Описание 2",
        answers: ["eat", "ate", "eaten", "eating"],
    },
]

export const lessonDataMock = {
    questions: mockQuestions,
    mixQuestions: true,
} as const
