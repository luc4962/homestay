import AccountModel from "~/server/models/Account";
export default defineEventHandler(async(event)=>{
    try {
        const token = await getCookie(event, 'token')
        if(!token) throw 'Chưa đăng nhập';

        const profile = JSON.parse(token);
        const username = profile.username;

        const result = await AccountModel.findOne({
            username: username
        });
        return result
        
    }
    catch(e){
        return false
    }
})