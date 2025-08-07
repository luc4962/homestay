<template>
    <div class="border-b flex justify-between items-center overflow-hidden h-[60px]">
        <img @click="navigateTo('/')" class="h-[50px] scale-y-[1.5] w-[150px] cursor-pointer" src="https://cdn.vectorstock.com/i/preview-1x/26/39/house-hotel-or-homestay-company-logo-inspiration-vector-48702639.jpg" />
        <div class="cursor-pointer" @click="logout()">
            Logout
        </div>
    </div>
</template>
<script setup>
    const logout = () =>{
        alert("Đã đăng xuất");
        const tokenCookie = useCookie('token');
        if(tokenCookie.value)
        {
            tokenCookie.value = null;
        }
        window.location.reload();
    }

</script>