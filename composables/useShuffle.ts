export function useShuffle() {
    const shuffle = <T>(array: T[]): T[] => {
        if (!Array.isArray(array)) {
            throw new Error('shuffle expects an array')
        }

        const shuffled = [...array]

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }

        return shuffled
    }

    return { shuffle }
}
