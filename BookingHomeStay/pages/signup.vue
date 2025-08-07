<template>
    <div class="py-3 px-5 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-green-100 w-[500px] ">
        <div class="flex items-center justify-between">
            <p class="text-lg font-semibold mb-2">Thêm tài khoản mới</p>
            <UIcon @click="closeFormAddAccount" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
        </div>
        <UFormGroup class="my-1" label="Tên đăng nhập">
            <UInput v-model="userInp" placeholder="tên đăng nhập" size="lg"/>
        </UFormGroup>
        <UFormGroup class="my-1" label="Loại tài khoản">
            <UInput v-model="typeInp" placeholder="1-admin 0-user" size="lg"/>
        </UFormGroup>
        <UFormGroup class="my-1" label="Mật khẩu">
            <UInput v-model="passInp" type="password" placeholder="password" size="lg"/>
        </UFormGroup>
        <UFormGroup class="my-1" label="Nhập lại mật khẩu">
            <UInput v-model="rePassInp" type="password" placeholder="password" size="lg"/>
        </UFormGroup>
        <UFormGroup class="my-1" label="Mail">
            <UInput v-model="mailInp" placeholder="email" size="lg"/>
        </UFormGroup>
        <UFormGroup class="my-1" label="Địa chỉ">
            <UInput v-model="addressInp" placeholder="địa chỉ" size="lg"/>
        </UFormGroup>
        <div class="flex justify-center items-center my-5">
            <UButton @click="lg">Sign up</UButton>
        </div>
        <div class="flex justify-center items-center my-5">
            <UButton @click="navigateTo('/login')">Log in</UButton>
        </div>
    </div>
</template>
<script setup>
    const userInp = ref("");
    const passInp = ref("");
    const rePassInp = ref("");
    const mailInp = ref("");
    const addressInp = ref("");
    const typeInp = ref("");

    async function lg()
    {
        if(passInp.value === rePassInp.value)
        {
            try {
                const {data, error} = await useFetch('/api/Accounts/add',{
                    method: 'POST',
                    body: {
                        username: userInp.value,
                        password: passInp.value,
                        type: typeInp.value,
                        mail: mailInp.value,
                        address : addressInp.value,
                    }
                })
                alert("Đăng ký thành công");
                navigateTo('/login');
            } catch (error) 
            {
                alert("Đăng ký không thành công");   
            }   
        }
        else{
            alert("Nhập lại mật khẩu và mật khẩu không trùng khớp");
        }
    }

</script>