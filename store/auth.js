export const state = () => ({
    loggedIn: 0,
})

export const getters = {
    isLoggedIn: state => state.loggedIn,
}

export const mutations = {
    logIn(state) {
        console.log('store set login true')
        state.loggedIn = 1
    },
}
