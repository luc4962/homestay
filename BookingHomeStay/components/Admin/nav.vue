<template>
    <div class="border-r h-screen w-[250px] flex flex-col ">
        <p class="my-5 text-center font-semibold ">Adminstator</p>
        <UButton @click="navigateTo(`${item.url}`)" color="none" class="my-1 text-black flex items-center cursor-pointer" v-for="(item, index) in managers">
            <UIcon class="text-lg" :name="item.icon" dynamic />
            <p class="text-lg">{{ item.name }}</p>
        </UButton>
    </div>
</template>
<script setup>
    const managers = ref([
        {icon: 'material-symbols:person-2-outline', name: 'Quản lý tài khoản', url:'/admin'},
        {icon: 'material-symbols-light:bedroom-child-outline', name: 'Quản lý phòng', url:'/adminRoom' },
        {icon: 'material-symbols:bedroom-parent-outline', name: 'Quản lý đặt phòng', url:'/adminBooking'},
        {icon: 'material-symbols:bedroom-parent-outline', name: 'Thống kê', url:'/'},
        {icon: 'material-symbols:bedroom-parent-outline', name: 'Báo cáo' , url:'/'},
    ])
</script>