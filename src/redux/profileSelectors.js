export const getProfilePage = (state) => {
    return {...state.profilePage}
}
export const getMyId = (state) => {
    return state.auth.id
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}