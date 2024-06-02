import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true, min:3, max: 20},
    email: {type: String, required: true, unique:true, max: 50},
    password: {type: String, required: true, unique:true, min: 6},
    image: {type: String},
    isAdmin: {type: String, required:true, default: false},
},{timestamps: true});

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    userId: {type: String, required:true},
    slug: {type: String, unique:true},
},{timestamps: true});

// export const User = mongoose.model.User || mongoose.model("User", userSchema);
// export const Post = mongoose.model.Post || mongoose.model("Post", postSchema);

export const User = mongoose.model("User", userSchema);
export const Post = mongoose.model("Post", postSchema);