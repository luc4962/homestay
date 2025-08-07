import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber:
    {
        type: String,
        required: true,
        trim: false,
        unique: true,
    },
    kichThuoc:{
        dai:{
            type:Number,
            default: 0,
            require:true,
        },
        rong:{
            type:Number,
            default: 0,
            require:true,
        },
        cao:{
            type:Number,
            default: 0,
            require:true,
        }
    },
    soNguoiMax:
    {
        type: Number,
        required: true,
    },
    soNguoiUsed:
    {
        type: Number,
        default: 0,
        required: true,
    },
    price:
    {
        type: Number,
        required: true,
    },
    author:
    {
        type: String,
    }
})

const RoomModel = mongoose.model('Room', roomSchema)

export default RoomModel