import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User',userSchema); // Model Creation
export default User;