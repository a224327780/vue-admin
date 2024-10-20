import {defineStore} from "pinia";

const useAppStore = defineStore('app', {
    state: () => ({
        title: import.meta.env.VITE_APP_TITLE
    }),
})
export default useAppStore