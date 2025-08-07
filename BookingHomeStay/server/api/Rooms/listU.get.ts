import RoomModel from "~/server/models/Room";

export default defineEventHandler(async()=>{
    try{
        const result = await RoomModel.find({
            author : {$ne: null},
        });
        return result;
    }catch(err){
        console.log(err)
    }
})