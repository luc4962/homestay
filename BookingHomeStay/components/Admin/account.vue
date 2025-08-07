<template>
    <div :class="{blur: isBlur}" class="relative items-center w-full mx-10 my-5" v-if="accounts">
        <div class="flex mb-5">
            <UInput 
                v-model="searchInp"
                class="mr-3 w-[250px]"
                icon="i-heroicons-magnifying-glass-20-solid"
                placeholder="Tìm kiếm"
                />
            <UButton @click="searchAcc()">Tìm kiếm</UButton>
        </div>
        <UButton @click="openFormAddAccount" class="mx-11 mb-5">Thêm tài khoản mới</UButton>
        <div v-for="(item, index) in accounts" :key="index" class="flex justify-between py-4 mx-8 px-3 w-[600px] border-b">
            <div>
                <p class="font-semibold text-red-500">Username: <span class="font-normal text-black">{{item.username}}</span> </p>
                <p class="font-semibold text-red-500 ">Loại tài khoản: <span class="font-normal text-black">{{item.isAdmin ? 'admin' : 'user'}}</span> </p>
                <p class="font-semibold text-red-500 ">Phòng đang sử dụng: <span class="font-normal text-black">{{item.roomNumberUsed ? item.roomNumberUsed  : 'Trống'}}</span> </p>

            </div>
            <div class="flex flex-col">
                <UIcon @click="showConfigAccF(item)" class="cursor-pointer text-lg my-2" name="material-symbols:tools-wrench-rounded" dynamic/>
                <UIcon @click="deleteAccount(item)" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
            </div>
        </div>

        <!-- form addAcc -->
        <div v-show="isShow" class="py-3 px-5 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-green-100 w-[500px] ">
            <div class="flex items-center justify-between">
                <p class="text-lg font-semibold mb-2">Thêm tài khoản mới</p>
                <UIcon @click="closeFormAddAccount" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
            </div>
            <UFormGroup class="my-1" label="Tên đăng nhập">
                <UInput v-model="userInp" placeholder="tên đăng nhập" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Loại tài khoản">
                <UInput v-model="typeInp" placeholder="1-admin 0-user" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Mật khẩu">
                <UInput v-model="passInp" type="password" placeholder="password" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Nhập lại mật khẩu">
                <UInput v-model="rePassInp" type="password" placeholder="password" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Mail">
                <UInput v-model="mailInp" placeholder="email" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Địa chỉ">
                <UInput v-model="addressInp" placeholder="địa chỉ" size="lg"/>
            </UFormGroup>
            <div class="mt-3 flex justify-end">
                <UButton @click="addAccount">Thêm</UButton>
            </div>
        </div>


        <!-- form config Acc -->
        <div v-show="isShowCongfig" class="py-3 px-5 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-green-100 w-[500px] ">
            <div class="flex items-center justify-between">
                <p class="text-lg font-semibold mb-2">Cập nhật tài khoản</p>
                <UIcon @click="closeFormAddAccount" class="cursor-pointer text-xl" name="material-symbols:close" dynamic/>
            </div>
            <UFormGroup class="my-1" label="Tên đăng nhập">
                <UInput readonly v-model="userInp" placeholder="Tên đăng nhập" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Loại tài khoản">
                <UInput v-model="typeInp" placeholder="1-admin 0-user" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Mật khẩu">
                <UInput v-model="passInp" type="password" placeholder="password" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Mail">
                <UInput v-model="mailInp" placeholder="email" size="lg"/>
            </UFormGroup>
            <UFormGroup class="my-1" label="Địa chỉ">
                <UInput v-model="addressInp" placeholder="địa chỉ" size="lg"/>
            </UFormGroup>
            <div class="mt-3 flex justify-end">
                <UButton @click="updateAccount">Update</UButton>
            </div>
        </div>

    </div>
</template>
<script setup>

    const searchInp = ref('');
    const accounts = ref(undefined);
    const accountstemp = ref(undefined);
    const isShow = ref(false);
    const isShowCongfig = ref(false);
    const isBlur = ref(false);
    // form thêm account
    function openFormAddAccount(){
        isShow.value = true
    }

    //close form thêm account
    function closeFormAddAccount(){
        isShow.value=false;
        isShowCongfig.value = false;

        userInp.value = null;
        passInp.value = null;
        mailInp.value = null;
        addressInp.value = null;
        typeInp.value = null;
        rePassInp.value = null;
    }

    // lay list account
    const loadListF = async() =>{
        const {data: haha, err} = await useFetch('/api/Accounts/list');
        accounts.value = haha.value;
    }
    loadListF();

    //xoa account
    async function deleteAccount(account)
    {
        const result = confirm("Bạn có chắc chắn muốn xóa");
        if(result)
        {
            const {data, error} = await useFetch('/api/Accounts/delete',{
                method: 'POST',
                body:{
                    _id: account._id
                }
            })
            loadListF();    
        }
    }

    //them account

    const userInp = ref("");
    const passInp = ref("");
    const rePassInp = ref("");
    const mailInp = ref("");
    const addressInp = ref("");
    const typeInp = ref("");


    async function addAccount()
    {
        if(passInp.value === rePassInp.value)
        {
            const {data, error} = await useFetch('/api/Accounts/add',{
                method: 'POST',
                body: {
                    username: userInp.value,
                    password: passInp.value,
                    type: typeInp.value,
                    mail: mailInp.value,
                    address : addressInp.value,
                }
            })
            
            closeFormAddAccount();
            loadListF();
        }
        else{
            alert("Nhập lại mật khẩu và mật khẩu không trùng khớp");
        }
        
    }
    const showConfigAccF = async (account) => {
        try 
        {
            console.log(account);

            const {data:i4acc} = await useFetch('/api/Accounts/getAcc',
            {
                method: 'POST',
                body:{
                    _id: account._id
                }
            })
            const typeAcc = ref();
            console.log(i4acc.value);
            if(i4acc.value.isAdmin==true)
            {
                typeAcc.value = 1;
            }
            else
            {
                typeAcc.value = 0;
            }
            userInp.value = i4acc.value.username;
            passInp.value = i4acc.value.password;
            mailInp.value = i4acc.value.mail;
            addressInp.value = i4acc.value.address;
            typeInp.value = typeAcc.value;
            isShowCongfig.value = true;
        }
        catch (error)
        {
            alert("Xóa phòng KHÔNG thành công");
        }
    }

    async function updateAccount()
    {
        const {data, error} = await useFetch('/api/Accounts/updateAcc',{
            method: 'POST',
            body: {
                username: userInp.value,
                password: passInp.value,
                type: typeInp.value,
                mail: mailInp.value,
                address : addressInp.value,
            }
        })
        
        isShowCongfig.value = false;
        loadListF();
    }


    const searchAcc = async() => {
        await loadListF();

        if(searchInp.value){
            accountstemp.value = accounts.value;
            const listRong = ref([]);
            console.log(accounts.value);
            accounts.value = listRong.value;
            for(const index in accountstemp.value)
            {
                const stringcheck = ref(accountstemp.value[index].username);
                if(stringcheck.value.includes(searchInp.value)){
                    accounts.value.push(accountstemp.value[index]);
                }
            }
        }
        else{
            loadListF();
        }
        
    }
</script>