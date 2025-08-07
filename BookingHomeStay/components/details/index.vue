<template>
    <div class="">
        <div class="my-5 h-[350px] overflow-hidden">
            <img class="w-full h-[350px] scale-y-[1.6]" src="https://vivutour.vn/wp-content/uploads/2021/10/bavi-homestay-10.jpeg"/>
        </div>
        <div class="mx-[100px] grid grid-cols-3">
            <div class="col-span-2">
                <p class="text-xl text-green-700">Krystal Villa Tam Đảo</p>
                <p class="py-2 text-lg font-semibold">Thông tin chi tiết</p>
                <p>Kumo Chan Homestay Tam Đảo tọa lạc tại tổ dân phố 2 thị trấn Tam Đảo, Vĩnh Phúc. Kumo Chan được thiết kế và xây dựng theo kiến trúc 
                    kiểu Nhật Bản là những căn nhà gỗ mộc mạc nhưng tinh tế.Với diện tích toàn bộ khuôn viên của homestay lên tới 3.000m2, 
                    Kumo Chan Homestay bao gồm 17 căn bungalow riêng lẻ nằm bên sườn núi tạo nên khung cảnh lãng mạn, nên thơ.</p>
                <img class="rounded hover:shadow-xl my-5 h-[300px] w-[650px] mx-auto" src="https://vivutour.vn/wp-content/uploads/2022/10/kumo-chan-homestay-tam-dao-6.jpg"/>
                <p>Ở Krystal Villa Tam Đảo có những gì?</p>
                <div class="flex items-center py-2">
                    <UIcon class="mr-1 text-green-500" name="ph:check-bold" dynamic/>
                    <p>Mọi dịch vụ ăn uống giải trí có sẵn trong biệt thự Krystal Tam Đảo</p>
                </div>
                <div class="flex items-center py-2">
                    <UIcon class="mr-1 text-green-500" name="ph:check-bold" dynamic/>
                    <p>Mọi dịch vụ ăn uống giải trí có sẵn trong biệt thự Krystal Tam Đảo</p>
                </div>
                <div class="flex items-center py-2">
                    <UIcon class="mr-1 text-green-500" name="ph:check-bold" dynamic/>
                    <p>Mọi dịch vụ ăn uống giải trí có sẵn trong biệt thự Krystal Tam Đảo</p>
                </div>
                <div class="flex items-center py-2">
                    <UIcon class="mr-1 text-green-500" name="ph:check-bold" dynamic/>
                    <p>Mọi dịch vụ ăn uống giải trí có sẵn trong biệt thự Krystal Tam Đảo</p>
                </div>
            </div>
            <div class=" h-[220px] flex justify-center col-span-1 ">
                <div class="border pt-2 px-4 rounded-lg">
                    <p class="pt-2 text-red-500 font-semibold">Giá: 1,000,000</p>
                    <div class="">
                        <p class="my-2">Ngày đi: </p>
                        <UInput class="w-[250px]" type="date"></UInput>
                    </div>
                    <div class="flex my-2">
                        <p class="mr-2">Số người: </p>
                        <UInput class="w-[50px]" type="number"></UInput>
                    </div>
                    <div class="flex items-center justify-center my-2">
                        <UButton @click="booking">Đặt phòng</UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    function booking() {
        alert("Đặt phòng thành công")
    }
</script>