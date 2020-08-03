const title = 'Tennis booker'
const description = 'Tennis booker est un outil de réservation de terrain de tennis'

export default {
    head: {
        titleTemplate: 'Tennis booker',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: description },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'twitter:description', content: description },
            { name: 'twitter:title', content: title },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' },
        ],
    },
    buildModules: ['@nuxtjs/vuetify'],
}
