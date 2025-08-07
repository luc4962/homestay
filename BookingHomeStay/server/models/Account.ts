import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true,
        trim: false,
        unique: true,
    },
    password:
    {
        type:String,
        required: true,
        trim: false,
    },
    mail:
    {
        type: String,
        required: true,
        trim: true,
    },
    address:
    {
        type: String,
        required : true,
        trim:true,
    },
    isAdmin:
    {
        type: Boolean,
        required:true,
        trim: false,
    },
    roomNumberUsed:
    {
        type: String,
        default: null,
    },
    
})

const AccountModel = mongoose.model('Account', accountSchema)

export default AccountModel