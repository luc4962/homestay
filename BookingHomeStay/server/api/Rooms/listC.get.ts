import RoomModel from "~/server/models/Room";

export default defineEventHandler(async()=>{
    try{
        const result = await RoomModel.find({
            author : null,
        });
        return result;
    }catch(err){
        console.log(err)
    }
})