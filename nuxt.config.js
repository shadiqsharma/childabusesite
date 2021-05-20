
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    base: '/',
    linkExactActiveClass: 'active'
  },
  head: {
    title: 'Child Abuse Help Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon' },
      { rel: 'apple-touch-icon', type: '180x180', href: '/apple-touch-icon.png ' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css', crossorigin: 'anonymous' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/now-ui-kit.scss',
    '~/assets/sass/demo.scss',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/globalDirectives.js', ssr: false },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/now-ui-kit' },
    '~/plugins/VueMaterial.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  buildModules: [
      '@nuxtjs/style-resources',
      '@nuxtjs/tailwindcss',
],
  styleResources: {
    css:[
      'vue-material/dist/vue-material.min.css',

    ],
    scss: [
      './assets/sass/now-ui-kit/_variables.scss',
      './assets/vars/*.scss',
      './assets/abstracts/_mixins.scss',
        './assets/sass/now-ui-kit/_mixins.scss',
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ],

        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
