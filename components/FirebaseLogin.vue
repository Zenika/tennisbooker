<template>
    <div id="firebaseui-auth-container" />
</template>

<script>
export default {
    name: 'FirebaseLogin',
    mounted: function() {
        window.firebase = require('firebase/app')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
        const config = {
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
            signInSuccessUrl: '/',
            callbacks: {
                signInSuccessWithAuthResult: () => {
                    this.$store.commit('auth/logIn')
                },
                uiShown: () => {},
            },
        }
        ui.start('#firebaseui-auth-container', config)
    },
}
</script>
