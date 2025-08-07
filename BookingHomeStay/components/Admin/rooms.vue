<template>
        <div class="relative items-center w-full mx-10 my-5" v-if="items">
            <div class="flex mb-5">
            <UInput 
                v-model="searchInp"
                class="mr-3 w-[250px]"
                icon="i-heroicons-magnifying-glass-20-solid"
                placeholder="Tìm kiếm"
                />
            <UButton @click="searchRoom()">Tìm kiếm</UButton>
        </div>
            <!-- button thêm phòng mới -->
            <UButton @click="openFormAddRoom" class="mx-11 mb-5">Thêm phòng mới</UButton>

            <!-- list danh sách các phòng -->
            <div v-for="(item, index) in items" :key="index" class="flex justify-between py-4 mx-8 px-3 w-[600px] border-b">
                <div>
                    <p class="font-semibold text-red-500">Số phòng: <span class="font-normal text-black">{{ item.roomNumber }}</span> </p>
                    <p class="font-semibold text-red-500 ">Kích thước (Dài x rộng x cao): <span class="font-normal text-black">{{ item.kichThuoc.dai }}m x {{item.kichThuoc.rong}}m x {{item.kichThuoc.cao}}m</span></p>
                    <p class="font-semibold text-red-500 ">Số người tối đa: <span class="font-normal text-black">{{ item.soNguoiMax }}</span> người </p>
                    <p class="font-semibold text-red-500 ">Giá phòng: <span class="font-normal text-black">{{item.price}}</span> VNĐ </p>
                    <p class="font-semibold text-red-500 ">Khách đang dùng: <span class="font-normal text-black">{{item.author ? item.author : "Trống" }}</span></p>
                </div>
                <div class="flex flex-col">
                    <UIcon @click="configRoomF(item.roomNumber)" class="cursor-pointer text-lg my-2" name="material-symbols:tools-wrench-rounded" dynamic/>
                    <UIcon @click="delRoomF(item.roomNumber)" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
                </div>
            </div>

            <!-- form add phòng -->
            <div v-show="isShow" class="py-3 px-5 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-green-100 w-[500px] ">
                <div class="flex items-center justify-between">
                    <p class="text-lg font-semibold mb-2">Thêm phòng mới</p>
                    <UIcon @click="closeFormAddRoom" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
                </div>
                <UFormGroup class="my-1" label="Số phòng">
                    <UInput v-model="rn" placeholder="Số phòng" size="lg"/>
                </UFormGroup>
                <UFormGroup class="my-1" label="Kích thước">
                    <div class="flex gap-3">
                        <UInput v-model="cdai" class="w-[150px]" placeholder="dài" size="lg"/>
                        <UInput v-model="crong" class="w-[150px]" placeholder="rộng" size="lg"/>
                        <UInput v-model="ccao" class="w-[150px]" placeholder="cao" size="lg"/>
                    </div>
                </UFormGroup>
                <UFormGroup class="my-1" label="Sức chứa">
                    <UInput v-model="rm" placeholder="Sức chứa" size="lg"/>
                </UFormGroup>
                <UFormGroup class="my-1" label="Giá">
                    <UInput v-model="rp" placeholder="Giá" size="lg"/>
                </UFormGroup>
                <div class="mt-3 flex justify-end">
                    <UButton @click="addRoomF()">Thêm</UButton>
                </div>
            </div>


            <!-- form config room -->
            <div v-show="isShowConfig" class="py-3 px-5 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-green-100 w-[500px] ">
                <div class="flex items-center justify-between">
                    <p class="text-lg font-semibold mb-2">Thêm phòng mới</p>
                    <UIcon @click="closeFormAddRoom" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
                </div>
                <UFormGroup class="my-1" label="Số phòng">
                    <UInput v-model="rn" readonly placeholder="Số phòng" size="lg"/>
                </UFormGroup>
                <UFormGroup class="my-1" label="Kích thước">
                    <div class="flex gap-3">
                        <UInput v-model="cdai" class="w-[150px]" placeholder="dài" size="lg"/>
                        <UInput v-model="crong" class="w-[150px]" placeholder="rộng" size="lg"/>
                        <UInput v-model="ccao" class="w-[150px]" placeholder="cao" size="lg"/>
                    </div>
                </UFormGroup>
                <UFormGroup class="my-1" label="Sức chứa">
                    <UInput v-model="rm" placeholder="Sức chứa" size="lg"/>
                </UFormGroup>
                <UFormGroup class="my-1" label="Giá">
                    <UInput v-model="rp" placeholder="Giá" size="lg"/>
                </UFormGroup>
                <div class="mt-3 flex justify-end">
                    <UButton @click="updateRoomF()">Cập nhật</UButton>
                </div>
            </div>

        </div>
</template>
<script setup>

    const rn = ref();
    const cdai = ref();
    const crong = ref();
    const ccao = ref();
    const rm = ref();
    const rp = ref();
    const searchInp = ref();
    const items = ref(undefined);
    const itemstemp = ref(undefined);

    const addRoomF = async () => {
        try 
        {
            const objRoom = ref
            ({
                roomNumber : rn.value,
                kichthuoc : {
                    chieudai : cdai.value,
                    chieurong : crong.value,
                    chieucao : ccao.value,
                },
                soNguoiMax : rm.value,
                price : rp.value,
                author: null,
            });

            const {data:check, error} = await useFetch('/api/Rooms/addRoom',
            {
                method: 'POST',
                body: JSON.parse(JSON.stringify(objRoom.value)),
            })
            closeFormAddRoom();
            loadListF();
            if(check.value === true)
            {
                alert("Thêm phòng thành công");
                isShow.value = false;
            }
            else
            {
                throw 'Thêm KHÔNG thành công';
            }
        }
        catch (error)
        {
            alert("Thêm phòng không thành công");
        }
    }

    const delRoomF = async (indexrn) => {
        const result = confirm("Bạn có chắc chắn muốn xóa");
        if(result)
        {
            try 
            {
                const {data:check, error} = await useFetch('/api/Rooms/delRoom',
                {
                    method: 'POST',
                    body: indexrn,
                })
                loadListF();
                if(check.value === true)
                {
                    alert("Xóa phòng thành công");
                }
                else
                {
                    throw 'Xóa phòng không thành công';
                }
            }
            catch (error)
            {
                alert("Xóa phòng không thành công");
            }
        }
    }
    const configRoomF = async (indexrn) => {
        try 
        {
            const {data:i4room} = await useFetch('/api/Rooms/getRoom',
            {
                method: 'POST',
                body: indexrn,
            })

            rn.value = i4room.value.roomNumber;
            cdai.value = i4room.value.kichThuoc.dai;
            crong.value = i4room.value.kichThuoc.rong;
            ccao.value = i4room.value.kichThuoc.cao;
            rm.value = i4room.value.soNguoiMax;
            rp.value = i4room.value.price;
            openFormConfigRoom();
        }
        catch (error)
        {
            alert("Xóa phòng KHÔNG thành công");
        }
    }

    const updateRoomF = async () => {
        try 
        {
            const objRoom = ref
            ({
                roomNumber : rn.value,
                kichthuoc : {
                    chieudai : cdai.value,
                    chieurong : crong.value,
                    chieucao : ccao.value,
                },
                soNguoiMax : rm.value,
                price : rp.value,
                author: null,
            });

            const {data:check, error} = await useFetch('/api/Rooms/updateRoom',
            {
                method: 'POST',
                body: JSON.parse(JSON.stringify(objRoom.value)),
            })
            
            closeFormAddRoom();
            loadListF();

            if(check.value === true)
            {
                alert("Cập nhật phòng thành công");
                isShow.value = false;
            }
            else
            {
                throw 'Cập nhật phòng KHÔNG thành công';
            }
        }
        catch (error)
        {
            alert("Thêm phòng KHÔNG thành công");
        }
    }

    const loadListF = async ()=>{
        try
        {
            const {data:listR} = await useFetch('/api/Rooms/list');
            items.value = listR.value;
        }
        catch (error)
        {
            console.log(error);
            console.log("Get List Room FAILED");

        }
    }
    

    loadListF();
    const isShow = ref(false)
    const isShowConfig = ref(false)


    function closeFormAddRoom(){
        isShow.value = false;
        isShowConfig.value = false;

        rn.value = null;
        cdai.value = null;
        crong.value = null;
        ccao.value = null;
        rm.value = null;
        rp.value = null;
    }

    function openFormAddRoom(){
        isShow.value = true
    }

    function openFormConfigRoom(){
        isShowConfig.value = true
    }


    const searchRoom = async() => {
        await loadListF();

        if(searchInp.value){
            itemstemp.value = items.value;
            const listRong = ref([]);
            items.value = listRong.value;
            for(const index in itemstemp.value)
            {
                const stringcheck = ref(itemstemp.value[index].roomNumber);
                if(stringcheck.value.includes(searchInp.value)){
                    items.value.push(itemstemp.value[index]);
                }
            }
        }
        else{
            loadListF();
        }
    }

</script>