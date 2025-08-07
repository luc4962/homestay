import AccountModel from "~/server/models/Account";
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event)
        await AccountModel.findOneAndUpdate(
            {
                username: body.username,
            },
            {
                $set:
                {
                    roomNumberUsed: body.roomNumberUsed,
                }
            }
        )
    }catch(err){
        console.log(err)
    }
})