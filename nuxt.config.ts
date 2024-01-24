// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    "@pinia/nuxt"
  ],
  runtimeConfig:{
    mongodbConection: process.env.MONGODB_URI
  },

  nitro: {
    plugins: ["@/server/db/index.ts"],
  },

})
