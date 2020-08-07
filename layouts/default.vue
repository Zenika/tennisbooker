<template>
    <v-app>
        <client-only v-if="!isLoggedIn"><firebase-login></firebase-login></client-only>
        <nuxt v-if="isLoggedIn"></nuxt>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import FirebaseLogin from '../components/FirebaseLogin'

export default {
    components: {
        FirebaseLogin,
    },
    computed: {
        ...mapGetters({ isLoggedIn: 'auth/isLoggedIn' }),
    },
}
</script>
