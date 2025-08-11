import mongoose from "mongoose";
const {Schema} = mongoose;


const BookSchema = new Schema({
    title:{
        type:String,
        required: true,
        default: "There has defult title"
    },
    author:{
        type:String,
        maxlength:300,
        required: true,
        default: "There has defult author",
    },
    price:{
        type:Number,
        required: true,
    },
    isAvailable:{
        type:Boolean,
        required: true,
    }
});
export default mongoose.model("Book",BookSchema);