import RoomModel from "~/server/models/Room"
export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        await RoomModel.findOneAndDelete({
            roomNumber: body,
        })
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
})