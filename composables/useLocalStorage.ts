// composables/useLocalStorage.ts
export const useLocalStorage = <T>(key: string, initialValue?: T) => {
    const data = ref<T | null>(initialValue ?? null)

    onMounted(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue) {
            try {
                data.value = JSON.parse(storedValue)
            } catch (e) {
                data.value = storedValue as unknown as T
            }
        }
        // console.log("localStorage", key, data.value)
    })

    watch(data, (newValue) => {
        if (newValue !== null && newValue !== undefined) {
            localStorage.setItem(key, JSON.stringify(newValue))
        } else {
            localStorage.removeItem(key)
        }
    }, { deep: true })

    return data
}