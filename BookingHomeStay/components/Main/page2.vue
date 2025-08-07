<template>
    <div class="py-[100px] grid grid-cols-2">
        <div class="inline-flex flex-col  my-auto">
            <p class="text-xl uppercase font-bold">About us</p>
            <p class="my-3 text-xl">Welcome to Homestay ***</p>
            <p class="text-lg italic text-gray-500">Description HomeStay</p>
            <div class="flex my-3">
                <div class="border rounded-sm mr-2">
                    <div class="border py-4 px-10 m-2 rounded-sm text-center">
                        <UIcon class="text-5xl" name="material-symbols:bedroom-parent-outline" dynamic/>
                        <p class="my-2 text-4xl uppercase font-bold">30</p>
                        <p class="text-lg uppercase italic text-gray-500">Phòng</p>
                    </div>
                </div>
                <div class="border rounded-sm mx-2">
                    <div class="border py-4 px-10 m-2 rounded-sm text-center">
                        <UIcon class="text-5xl" name="clarity:administrator-solid" dynamic/>
                        <p class="my-2 text-4xl uppercase font-bold">70</p>
                        <p class="text-lg uppercase italic text-gray-500">Khách lẻ</p>
                    </div>
                </div>
                <div class="border rounded-sm mx-2">
                    <div class="border py-4 px-10 m-2 rounded-sm text-center">
                        <UIcon class="text-5xl" name="ph:users-three-fill" dynamic/>
                        <p class="my-2 text-4xl uppercase font-bold">20</p>
                        <p class="text-lg uppercase italic text-gray-500">Nhóm</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-start">
                <UButton color="orange">Explore more</UButton>
            </div>
        </div>

        <div class="flex flex-wrap justify-end">
            <img class="rounded-xl shadow-xl hover:scale-[1.1] duration-500 cursor-pointer w-[280px] h-[260px] my-2 mx-2" src="https://ezcloud.vn/wp-content/uploads/2023/07/homestay-o-moc-chau.webp"/>
            <img class="rounded-xl shadow-xl hover:scale-[1.1] duration-500 cursor-pointer w-[280px] h-[260px] my-2 mx-2" src="https://vcdn-dulich.vnecdn.net/2020/09/14/hoangsuphilodge-1-1600053990-3719-1600058748.jpg"/>
            <img class="rounded-xl shadow-xl hover:scale-[1.1] duration-500 cursor-pointer w-[280px] h-[260px] my-2 mx-2" src="https://luxtour.com.vn/wp-content/uploads/2022/06/homestay-tai-ha-giang-3.jpg"/>
            <img class="rounded-xl shadow-xl hover:scale-[1.1] duration-500 cursor-pointer w-[280px] h-[260px] my-2 mx-2" src="https://homestayreview.vn/wp-content/uploads/2021/01/homestay-ha-giang-16.jpg"/>
        </div>
    </div>
</template>