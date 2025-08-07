<template>
    <AdminRooms/>
</template>
<script setup>
    definePageMeta({
        layout:'admin-room',
        middleware:'check-auth',
    })
</script>