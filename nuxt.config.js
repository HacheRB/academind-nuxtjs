const bodyParser = require('body-parser')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Web Dev Blog!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070', height: '4px', duration: 5000 },

  // loadingIndicator: { // this works with SPA
  //   name: 'circle',
  //   color: '#3B8070'
  // },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/core-components.js',
    '@plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseURL: process.env.BASE_URL || 'https://academind-nuxtjs-default-rtdb.europe-west1.firebasedatabase.app',
    fbAPIKey: 'AIzaSyCtqn8u7dk2Zni3q4pSEbtKi0EoAA36Gh4'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '@/api'
  ]
  // router: {
  //   middleware: 'log'
  // }
}
