import RoomModel from "~/server/models/Room";
import AccountModel from "~/server/models/Account";

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        await RoomModel.findOneAndUpdate
        (
            {
                roomNumber : body.roomNumber,
            },
            {
                $set:
                {
                    soNguoiUsed: null,
                    author: null,
                }
            }
        )

        await AccountModel.findOneAndUpdate
        (
            {
                roomNumberUsed : body.roomNumber,
            },
            {
                $set:
                {
                    roomNumberUsed : null,
                }
            }
        )
    }catch(err){
        console.log(err);
        return false;
    }
})