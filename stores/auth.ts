// // app/stores/auth.ts
// import { defineStore } from 'pinia'

// export const useAuthStore = defineStore('auth-store', {
//     state: () => ({
//         userid: null as string | null,
//         isAuth: false,
//         authToken: null as string | null,
//     }),
//     actions: {
//         signin(userData: any) {
//             // ... логика входа
//             this.isAuth = true
//             this.authToken = userData.token
//             this.userid = userData.id
//         },
//         signout() {
//             this.isAuth = false
//             this.authToken = null
//             this.userid = null
//         }
//     },
//     // Включаем сохранение состояния в localStorage
//     persist: true,
// })