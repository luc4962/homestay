import AccountModel from "~/server/models/Account";
import RoomModel from "~/server/models/Room";
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
                    roomNumberUsed: null,
                }
            }
        )

        await RoomModel.findOneAndUpdate(
            {
                author: body.username,
            },
            {
                $set:
                {
                    author: null,
                }
            }
        )
    }catch(err){
        console.log(err)
    }
})