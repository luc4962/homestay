<template>
    <div class="h-[60px] flex justify-between items-center ">
        <div class="cursor-pointer overflow-hidden" @click="navigateTo('/')">
            <img class="h-[50px] scale-y-[1.5] w-[150px]" src="https://cdn.vectorstock.com/i/preview-1x/26/39/house-hotel-or-homestay-company-logo-inspiration-vector-48702639.jpg" />
        </div>
        <div class="uppercase text-sm font-semibold">
            <a class="mx-5" @click="navigateTo('/')">Home</a>
            <a class="mx-5" href="#">About us</a>
            <a class="mx-5" href="#">Rooms</a>
            <a class="mx-5" href="#">Services</a>
            <a class="mx-5" href="#">Page</a>
            <a class="mx-5" href="#">Contact</a>
        </div>
    </div>
</template>
<script setup>

</script>