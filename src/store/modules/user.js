import {defineStore} from 'pinia'
import {login, logout} from '@/api/modules/auth'

const useUserStore = defineStore(
    'user', {
        state: () => ({
            access: null,
        }),
        persist: {
            storage: localStorage,
            paths: ['access'],
            debug: true
        },
        actions: {
            login(userInfo) {
                const {username, password} = userInfo;
                return new Promise((resolve, reject) => {
                    // login({username: username.trim(), password}).then(async res => {
                    //     const {code, data} = res;
                    //     if (code === 200) {
                    //         this.access = data.access
                    //     }
                    //     resolve(res);
                    // }).catch(err => {
                    //     reject(err)
                    // })
                    this.access = []
                })
            },
            logout() {
                return new Promise((resolve, reject) => {
                    logout().then((res) => {
                        const {code} = res;
                        if (code === 200) {
                            this.access = null
                            sessionStorage.clear();
                            localStorage.clear();
                        }
                        resolve(res)
                    }).catch(error => {
                        reject(error)
                    })
                })
            },

        }
    })

export default useUserStore
