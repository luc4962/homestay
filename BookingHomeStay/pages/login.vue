<template>
    <div class=" w-full flex flex-col items-center mt-[100px]">
        <div class="bg-white rounded-3xl overflow-hidden w-[600px] h-[300px] border-solid border-black border-[1px]">
            <div class="w-[600px] h-[50px] bg-gray-300 justify-center items-center flex font-extrabold text-[30px]">
                Login
            </div>
            <div class="flex justify-center items-center my-5">
                User:
                <UInput @keyup.enter="lg" v-model="userr" class=" mx-3 w-[400px]"></UInput>
            </div>
            
            <div class="flex justify-center items-center my-5">
                Pass:
                <UInput @keyup.enter="lg" type="password" v-model="passs" class=" mx-3 w-[400px]"></UInput>
            </div>
            
            <div class="flex justify-center items-center my-5">
                <UButton @click="lg">Login</UButton>
            </div>
            <div class="flex justify-center items-center my-5">
                <UButton @click="navigateTo('/signup')">Sign up</UButton>
            </div>
        </div>
    </div>
</template>

<script setup>
    const userr = ref('');
    const passs = ref('');
    async function lg()
    {
        if(userr.value!=='' && passs.value!=='')
        {
            const {data,error} = await useFetch('/api/Accounts/login', {
                method: 'POST',
                body: {
                    username: userr.value,
                    password: passs.value
                }
            });

            if(data.value===true)
            {
                navigateTo('/admin')
            }
        }
        else
        {
            alert('Không nên bỏ trống thông tin');
        }
    }

</script>