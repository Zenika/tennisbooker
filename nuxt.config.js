const title = 'Réservation de terrain de tennis'
const description = 'Outil pour la réservation de terrain de tennis'

export default {
    head: {
        titleTemplate: 'Réservation de terrain de tennis',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: description },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'twitter:description', content: description },
            { name: 'twitter:title', content: title },
        ],
        script: [{ src: 'https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth__fr.js' }],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' },
            { rel: 'stylesheet', href: 'https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css' },
        ],
    },
    buildModules: [
        [
            '@nuxtjs/axios',
            {
                baseURL: process.env.BASE_URL
            }
        ],
        [
            '@nuxtjs/vuetify',
            {
                lang: { current: 'fr' },
            },
        ],
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyB_R6yGeRSqSpLJObfDeuCuIFXmwZaAkKA',
                    authDomain: 'firetennisbooker.firebaseapp.com',
                    databaseURL: 'https://firetennisbooker.firebaseio.com',
                    projectId: 'firetennisbooker',
                    storageBucket: 'firetennisbooker.appspot.com',
                    messagingSenderId: '1054995911634',
                    appId: '1:1054995911634:web:6a0a238b6d0d4c55436e0b',
                },
                services: {
                    auth: true,
                },
            },
        ],
    ],
}
