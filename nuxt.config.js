export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuelidate.js',
    '@/plugins/animateonscroll.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [    
    ['@nuxtjs/eslint-module', {
      cache: false
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-174985937-1'
    }]
  ],
  server: {
    port: process.env.NODE_ENV === 'production' ? 3000 : 3000,
    host: process.env.NODE_ENV === 'production' ? 'officedubatiment.com' : 'localhost'
  },
  modules: [
    'bootstrap-vue/nuxt',
    ['vue-scrollto/nuxt', {
        duration: 500
      }
    ],
    'nuxt-webfontloader',
    '@nuxtjs/apollo'
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      }
    ],
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NODE_ENV === 'production' ? 'https://api.officedubatiment.com/graphql' : 'http://localhost:1337/graphql'
      }
    }
  },
  webfontloader: {
    google: {
      families: ['Lexend:400,500,700']
    }
  },
  env: {
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://api.officedubatiment.com' : 'http://localhost:1337'
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false
  },
  /*
  ** Build configuration
  */
  build: {}
}
