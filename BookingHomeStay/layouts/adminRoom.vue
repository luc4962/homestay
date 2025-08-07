<template>
    <div class="flex items-center justify-center">
        <div class="w-[1600px]">
            <AdminHeader/>
            <div class="flex">
                <AdminNav/>
                <slot/>
            </div>
        </div>
    </div>
</template>