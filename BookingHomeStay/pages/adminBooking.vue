<template>
    <AdminBooking></AdminBooking>
</template>
<script setup>
    definePageMeta({
        layout:'admin',
        middleware:'check-auth',
    })
</script>