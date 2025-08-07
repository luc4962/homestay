import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true,
        trim: true,
    },
    describe:
    {
        type: String,
        required: true,
        trim: true,
    },
    imgs:
    {
        type:Array,
        default: [],
        required: true,
    },
})

const PostModel = mongoose.model('Post',postSchema);

export default PostModel

