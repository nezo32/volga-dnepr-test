import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { ru } from 'vuetify/locale'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Configuring vuetify library and adding...
export default createVuetify({
    // components 
    components,
    // directives 
    directives,
    // material disign icons
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    // setting locale to Russian
    locale: {
        locale: 'ru',
        fallback: 'ru',
        messages: { ru },
    },
    // setting default theme to dark
    theme: {
        defaultTheme: 'dark',
    }
});