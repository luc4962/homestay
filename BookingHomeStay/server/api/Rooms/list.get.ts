import RoomModel from "~/server/models/Room";

export default defineEventHandler(async()=>{
    try{
        const result = await RoomModel.find();
        return result;
    }catch(err){
        console.log(err)
    }
})