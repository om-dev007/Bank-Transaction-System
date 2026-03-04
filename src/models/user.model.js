import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required for creating a user"],
        trim: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
        unique: [true, "Email already exists."]
    },
    name: {
        type: String,
        required: [true, "Name is required for creating an account"],
    },
    password: {
        type: String,
        required: [true, "Password is required for creating an accound"],
        minlength: [6, "Password should contain more than 6 character"],
        select: false,
    }
}, {timestamps: true})

userSchema.pre("save", async (next) => {
    
})