<template>
    <div id="firebaseui-auth-container" />
</template>

<script>
const firebase = require('firebase/app')
export default {
    name: 'FirebaseLogin',
    async mounted() {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.commit('auth/logIn')
            } else {
                this.showLoginUI()
            }
        })
    },
    methods: {
        showLoginUI() {
            window.firebase = firebase // FirebaseUI needs window.firebase access
            const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
            const config = {
                signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
                signInSuccessUrl: '/',
                callbacks: {
                    signInSuccessWithAuthResult: ({ additionalUserInfo, credential, user, operationType }) => {
                        this.$store.commit('auth/logIn')
                    },
                    uiShown: () => {},
                },
            }
            ui.start('#firebaseui-auth-container', config)
        },
    },
}
</script>
