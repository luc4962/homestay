import AccountModel from "~/server/models/Account";

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event)
        await AccountModel.deleteOne({_id: body._id})
    }catch(err){
        console.log(err)
    }
})