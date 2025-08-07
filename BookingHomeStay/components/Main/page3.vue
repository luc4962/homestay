<template>
    <div class="mb-[100px]">
        <p class="pb-[50px] text-center text-xl uppercase font-bold">Explore Our <span>Rooms</span></p>
        <p class="text-end pb-5 cursor-pointer" @click="navigateTo('/listRoom')">Show more</p>
        <div class="flex justify-evenly">
            <div class="flex items-center flex-col hover:shadow-xl duration-500  overflow-hidden w-[300px]">
                <div >
                    <img @click="navigateTo('/detail')" class="w-[300px] h-[230px] rounded-lg cursor-pointer shadow-xl" src="https://bizweb.dktcdn.net/100/072/558/files/the-muse-home.jpg?v=1673406825924"/>
                </div>
                <div class="text-center">
                    <p @click="navigateTo('/detail')" class="hover:text-orange-600 py-2 text-green-700 cursor-pointer">Phòng Vip 1</p>
                    <p class="pb-2 text-red-600 font-bold">13,000,000 VNĐ</p>
                </div>
            </div>

            <div class="flex items-center flex-col hover:shadow-xl duration-500  overflow-hidden w-[300px]">
                <div>
                    <img @click="navigateTo('/detail')" class="w-[300px] h-[230px] rounded-lg cursor-pointer shadow-xl" src="https://images.toplist.vn/images/800px/the-muse-homestay-quan-lan-678100.jpg"/>
                </div>
                <div class="text-center">
                    <p @click="navigateTo('/detail')" class="hover:text-orange-600 py-2 text-green-700 cursor-pointer">Phòng Vip 2</p>
                    <p class="pb-2 text-red-600 font-bold">9,600,000 VNĐ</p>
                </div>
            </div>

            <div class="flex items-center flex-col hover:shadow-xl duration-500  overflow-hidden w-[300px]">
                <div>
                    <img @click="navigateTo('/detail')" class="w-[300px] h-[230px] rounded-lg cursor-pointer shadow-xl" src="https://kientrucsuvietnam.vn/wp-content/uploads/2021/12/thiet-ke-homestay-nha-vuon-dep-1.jpeg"/>
                </div>
                <div class="text-center">
                    <p @click="navigateTo('/detail')" class="hover:text-orange-600 py-2 text-green-700 cursor-pointer">Phòng thường 1</p>
                    <p class="pb-2 text-red-600 font-bold">8,000,000 VNĐ</p>
                </div>
            </div>

            <div class="flex items-center flex-col hover:shadow-xl duration-500  overflow-hidden w-[300px]">
                <div>
                    <img @click="navigateTo('/detail')" class="w-[300px] h-[230px] rounded-lg cursor-pointer shadow-xl" src="https://cdnphoto.dantri.com.vn/jF6-lCn16ELNN9BhZBXAnMLW8AA=/zoom/1200_630/2021/11/04/cap-doi-roi-nui-xuong-bien-cai-tao-can-nha-cu-xuong-cap-thanh-homestay-xinh-dep-crop-1635984657201.jpeg"/>
                </div>
                <div class="text-center">
                    <p @click="navigateTo('/detail')" class="hover:text-orange-600 py-2 text-green-700 cursor-pointer">Phòng thường 2</p>
                    <p class="pb-2 text-red-600 font-bold">5,000,000 VNĐ</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    
</script>