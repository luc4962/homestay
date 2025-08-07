import AccountModel from "~/server/models/Account";

export default defineEventHandler(async()=>{
    try{
        const result = await AccountModel.find({
            roomNumberUsed : null,
        })
        return result
    }catch(err){
        console.log(err)
    }
})