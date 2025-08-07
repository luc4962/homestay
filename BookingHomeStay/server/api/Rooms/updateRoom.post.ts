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
                kichThuoc : {
                    dai : body.kichthuoc.chieudai,
                    rong : body.kichthuoc.chieurong,
                    cao : body.kichthuoc.chieucao,
                },
                soNguoiMax : body.soNguoiMax,
                price : body.price,
            }
        }
        )
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
})