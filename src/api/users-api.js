import { instance } from "./api"

const usersApi = {
    login(login, password) {
        return instance.get(`users?user_login=${login}&user_password=${password}`)
    },
    register(login, password) {
        return instance.post(`users`, {
            user_login: login,
            user_password: password
        })
    }
}

export default usersApi;