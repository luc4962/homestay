import AccountModel from "~/server/models/Account";
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        console.log(body);
        const result = await AccountModel.findOne({
            _id: body._id,
        })
        return result;
    }catch(err){
        console.log(err);
        return false;
    }
})