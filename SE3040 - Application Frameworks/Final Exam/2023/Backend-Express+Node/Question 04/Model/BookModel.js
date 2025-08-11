import mongoose from "mongoose"
const {Schema} =mongoose;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    author:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
    },
    isAvailable:{
        type: Boolean,
        required: true,
        default: true,
    }
});

export default mongoose.model("Book", BookSchema);