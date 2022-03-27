export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'virtlamp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa'
  ],

  // PWA Configuration: https://go.nuxtjs.dev/pwa
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
      icon: {
        sizes: [16, 32, 64, 120, 144, 152, 192, 384, 512],
      },
      manifest: {
        lang: 'en',
        name: "International Virtual Conference on Machine Learning Applications in Applied Sciences and Mathematics",
        short_name: 'IVCMASM 2022',
        description: 'The International Virtual Conference on Machine Learning Applications in Applied Sciences and Mathematics (IVCMASM 2022). The conference focuses on machine learning applications and latest developments in the Fields of physics, chemistry, mathematics, social sciences, agriculture, economics and other applied sciences. It targets to bring together researchers from all over the world to present the latest research results, and it is one of the main venues for demonstrating the results of research projects in relevant areas. ',
        background_color: "#ffffff",
        theme_color: "#fb0100",
      },
      meta: {
        lang: 'en',
        name: "International Virtual Conference on Machine Learning Applications in Applied Sciences and Mathematics",
        short_name: 'IVCMASM 2022',
        description: 'The International Virtual Conference on Machine Learning Applications in Applied Sciences and Mathematics (IVCMASM 2022). The conference focuses on machine learning applications and latest developments in the Fields of physics, chemistry, mathematics, social sciences, agriculture, economics and other applied sciences. It targets to bring together researchers from all over the world to present the latest research results, and it is one of the main venues for demonstrating the results of research projects in relevant areas. ',
        background_color: "#ffffff",
        theme_color: "#fb0100",
        appleStatusBarStyle: 'black',
        author: "Dept of Artificial Intelligence and Data Science",
        twitterCard: 'summary_large_image',
        twitterAuthor: '@retraigo',
        twitterSite: '@srm_easwari',
      },
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
