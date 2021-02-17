import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "1114fa74-300b-4849-84b5-d50778e5acb1"}
})

export const usersAPI = {
    getUsers(pageSize,currentPage,searchUserString='') {
        return instance.get(`users?count=${pageSize}&page=${currentPage}&term=${searchUserString !== '' ? searchUserString : ''}`).then(response => response.data)
    },
    getProfile(userId) {
      return profileAPI.getProfile(userId)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
