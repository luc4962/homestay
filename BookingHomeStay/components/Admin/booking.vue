<template>
<div class="relative items-center w-full mx-10 my-5">
            <!-- button thêm phòng mới -->
            <UButton @click="openFormBook" class="mx-11 mb-5">ĐẶT PHÒNG</UButton>
            <UButton @click="openFormRemove" class="mx-11 mb-5">HỦY PHÒNG</UButton>

            <!-- Dat phong-->
            <div v-if="isShowBook" class=" w-[500px] h-[250px] border-black border-[1px] rounded-2xl">
                <div class="p-3 w-[500px] ">
                    <div class="gap-5 grid-cols-2 grid p-2">
                        <label>Chọn khách muốn đặt :</label>
                        <USelect class="w-[150px]" v-model="iAcc" :options="listAcc" />
                    </div>
                    <div class="grid-cols-2 grid gap-5 p-2">
                        <label>Chọn phòng muốn đặt :</label>
                        <USelect class="w-[150px]" v-model="iRoom" :options="listRoom" />
                    </div>
                    <div class="grid-cols-2 grid gap-5 p-2">
                        <label>Số người ở :</label>
                        <UInput class="w-[150px]" v-model="numUsed" />
                    </div>
                    <div class="grid-cols-2 grid gap-5 p-2">
                        <UButton @click="datPhongF()" class="w-[50px]">Đặt</UButton>
                    </div>
                </div>
            </div>


            <!-- Huy phong-->
            <div v-if="isShowRemove" class=" w-[500px] h-[250px] border-black border-[1px] rounded-2xl">
            <div class="p-3 w-[500px] ">
                <div class="gap-5 grid-cols-2 grid p-2">
                    <label>Chọn khách muốn hủy :</label>
                    <USelect class="w-[150px]" v-model="iAccU" :options="listAccU" />
                </div>
                <div class="grid-cols-2 grid gap-5 p-2">
                    <label>Chọn phòng muốn hủy :</label>
                    <USelect class="w-[150px]" v-model="iRoomU" :options="listRoomU" />
                </div>
                <div class="grid-cols-2 grid gap-5 p-2">
                    <UButton @click="huyPhongF()" class="w-[50px]">Hủy</UButton>
                </div>
                
            </div>

            </div>

        </div>
</template>
<script setup>

    const isShowBook = ref(false);
    const isShowRemove = ref(false);


    //dat phong
    const numUsed = ref();
    const listRoom = ref([]);
    const listAcc = ref([]);
    const iRoom = ref();
    const iAcc = ref();


    //huy phong
    const listRoomU = ref([]);
    const listAccU = ref([]);
    const iRoomU = ref();
    const iAccU = ref();

    const loadListACF = async ()=>{
        try
        {
            const items = ref();
            const listTemp = ref([]);
            const {data:listR} = await useFetch('/api/Accounts/listC');
            items.value = listR.value;
            for(const item in items.value)
            {
                listTemp.value.push(items.value[item].username);
            }
            listAcc.value = listTemp.value;
        }
        catch (error)
        {
            console.log(error);
            console.log("Get List Room FAILED");
        }
    }

    const loadListRCF = async ()=>{
        try
        {
            const items = ref();
            const listTemp = ref([]);
            const {data:listR} = await useFetch('/api/Rooms/listC');
            items.value = listR.value;
            for(const item in items.value)
            {
                listTemp.value.push(items.value[item].roomNumber);
            }
            listRoom.value = listTemp.value;
        }
        catch (error)
        {
            console.log(error);
            console.log("Get List Room FAILED");
        }
    }
    const loadListAUF = async ()=>{
        try
        {
            const items = ref();
            const listTemp = ref([]);
            const {data:listR} = await useFetch('/api/Accounts/listU');
            items.value = listR.value;
            for(const item in items.value)
            {
                listTemp.value.push(items.value[item].username);
            }
            listAccU.value = listTemp.value;
        }
        catch (error)
        {
            console.log(error);
            console.log("Get List Room FAILED");
        }
    }
    const loadListRUF = async ()=>{
        try
        {
            const items = ref();
            const listTemp = ref([]);
            const {data:listR} = await useFetch('/api/Rooms/listU');
            items.value = listR.value;
            for(const item in items.value)
            {
                listTemp.value.push(items.value[item].roomNumber);
            }
            listRoomU.value = listTemp.value;
        }
        catch (error)
        {
            console.log(error);
            console.log("Get List Room FAILED");
        }
    }
    const loadDataF = () =>{
        loadListRCF();
        loadListACF();
        loadListRUF();
        loadListAUF();
    }

    loadDataF();
    
    const datPhongF = async () => {
        try
        {
            const {data:upRoom} = await useFetch('/api/Rooms/book',
            {
                method: 'POST',
                body:{
                    roomNumber: iRoom.value,
                    soNguoiUsed: numUsed.value,
                    username: iAcc.value,
                },
            })

            const {data:upAcc} = await useFetch('/api/Accounts/book',
            {
                method: 'POST',
                body:{
                    username: iAcc.value,
                    roomNumberUsed: iRoom.value,
                },
            })

            alert("Đặt phòng THÀNH CÔNG");
            loadDataF();
        }
        catch (error)
        {
            alert("Đặt phòng KHÔNG thành công");
        }
    }
    const huyPhongF = async () => {
        try
        {
            console.log(iRoomU.value);
            const {data:upRoom} = await useFetch('/api/Rooms/remove',
            {
                method: 'POST',
                body:{
                    roomNumber: iRoomU.value,
                },
            })

            const {data:upAcc} = await useFetch('/api/Accounts/remove',
            {
                method: 'POST',
                body:{
                    username: iAccU.value,
                },
            })
            alert("Hủy phòng THÀNH CÔNG");
            loadDataF();
        }
        catch (error)
        {
            alert("Hủy phòng KHÔNG thành công");
        }
    }


    const openFormBook = ()=>{

        isShowRemove.value = false;
        isShowBook.value = !isShowBook.value;
    }
    const openFormRemove = ()=>{
        isShowBook.value = false;
        isShowRemove.value = !isShowRemove.value;
    }


</script>