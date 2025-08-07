import RoomModel from "~/server/models/Room"
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        await RoomModel.findOneAndUpdate({
            roomNumber : body.roomNumber,
        },
        {
            $set:
            {
                soNguoiUsed: body.soNguoiUsed,
                author: body.username,
            }
        }
        )
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
})