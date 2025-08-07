export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data } = await useFetch('/api/Accounts/get');
    if(!data.value) return navigateTo('/login')
  })