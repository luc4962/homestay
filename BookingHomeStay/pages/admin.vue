<template>
    <AdminAccount></AdminAccount>
</template>
<script setup>
    definePageMeta({
        layout:'admin',
        middleware:'check-admin',
    })
</script>