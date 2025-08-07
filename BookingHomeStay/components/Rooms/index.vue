<template>
    <div class="mx-[300px]">
        <p class="text-center my-[50px] text-xl uppercase font-semibold">Our <span>Rooms</span> </p>
        <div>
            <RoomsRoom v-for="(item, index) in 5"/>
        </div>
    </div>
</template>