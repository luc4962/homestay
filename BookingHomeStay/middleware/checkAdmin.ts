export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data } = await useFetch('/api/Accounts/getAd');
    if(!data.value) return navigateTo('/login')
  })