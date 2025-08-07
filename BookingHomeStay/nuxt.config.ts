// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  runtimeConfig:{
    dbUrl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
    dbUser: process.env.DBUSERNAME,
    dbPass: process.env.DBPASSWORD,
    dbAuthSource: process.env.DBAUTHSOURCE
  }
})
