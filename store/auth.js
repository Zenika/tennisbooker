export const state = () => ({
    loggedIn: false,
})

export const getters = {
    isLoggedIn: state => state.loggedIn,
}

export const mutations = {
    logIn(state) {
        state.loggedIn = true
    },
}
