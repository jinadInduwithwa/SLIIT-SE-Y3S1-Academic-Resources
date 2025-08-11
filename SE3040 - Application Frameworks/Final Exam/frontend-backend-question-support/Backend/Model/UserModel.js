import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true, // Must be provided
    unique: true, // No duplicate usernames allowed
  },
  email: {
    type: String,
    required: true,
    lowercase: true, // Converts email to lowercase automatically
    trim: true, // Removes extra spaces from start/end
    match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a valid Gmail address"], // Regex pattern for Gmail-only
  },
  phone: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{9,14}$/, "Phone must be a valid international number"], // Regex for international format (E.164)
  },
  bio: {
    type: String,
    maxlength: 300, // Limits bio to 300 characters
    default: "This user hasn't written a bio yet.",  // Default if empty
  },
  age: {
    type: Number,
    min: 13,  // Minimum age required
    max: 120,  // Maximum age allowed
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'banned'], // Only these values are allowed
    default: 'active',  // Default status
  },
  preferences: {
    type: Map, // Flexible key-value object
    of: String, // All values inside must be strings
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets creation time
    immutable: true, // Can't be changed once sets
  },
  metadata: {
    type: Schema.Types.Mixed, // Allows storing any type of data
  },
});

export default mongoose.model("User", userSchema); // model name , function name
