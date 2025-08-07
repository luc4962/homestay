import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postcmt:{
        type: mongoose.Schema.ObjectId, 
        ref: 'Post',
    },
    describe:
    {
        type: String,
        required: true,
        trim: true,
    },
    author:
    {
        type: mongoose.Schema.ObjectId, 
        ref: 'Account',
    }
})

const cmtModel = mongoose.model('Comment',commentSchema);

export default cmtModel

