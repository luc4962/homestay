<template>
    <div class="flex items-center flex-col hover:shadow-xl duration-500  overflow-hidden w-[300px]">
        <div>
            <img @click="navigateTo('/detail')" class="w-[300px] rounded-lg cursor-pointer shadow-xl" src="https://ezcloud.vn/wp-content/uploads/2023/07/homestay-o-moc-chau.webp"/>
        </div>
        <div class="text-center">
            <p @click="navigateTo('/detail')" class="hover:text-orange-600 py-2 text-green-700 cursor-pointer">Name of room in homestay</p>
            <p class="pb-2 text-red-600 font-bold">13,000,000 VNĐ</p>
        </div>
    </div>
</template>