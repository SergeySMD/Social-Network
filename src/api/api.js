import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1114fa74-300b-4849-84b5-d50778e5acb1",
    }
})

export const usersAPI = {
    getUsers(pageSize,currentPage,searchUserString='',isFriends) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}&term=${searchUserString !== '' ? searchUserString : ''}&friend=${isFriends}`).then(response => response.data)
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
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    updateAvatar(avatar) {
        let formData = new FormData();
        formData.append("image", avatar);
        return instance.put(`profile/photo`, formData,{headers:{ 'Content-Type': 'multipart/form-data'}})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email,password,rememberMe, captcha = false) {
        return instance.post(`auth/login`, {email,password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
    }
}
