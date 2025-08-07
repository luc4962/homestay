import RoomModel from "~/server/models/Room"
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        await RoomModel.create({
            roomNumber : body.roomNumber,
            kichThuoc : {
                dai : body.kichthuoc.chieudai,
                rong : body.kichthuoc.chieurong,
                cao : body.kichthuoc.chieucao,
            },
            soNguoiMax : body.soNguoiMax,
            price : body.price,
            author: null,
        })
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
})