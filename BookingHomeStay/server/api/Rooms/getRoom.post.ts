import RoomModel from "~/server/models/Room"
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        console.log(body);
        const result = await RoomModel.findOne({
            roomNumber: body,
        })
        return result;
    }catch(err){
        console.log(err);
        return false;
    }
})