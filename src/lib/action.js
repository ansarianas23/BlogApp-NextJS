"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import {Post, User} from './models'
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'

export const addPost = async (formData)=>{
    const {title, description, slug, userId} = Object.entries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            description,
            slug,
            userId
        });
        await newPost.save();
        revalidatePath("/blog")
        console.log("Saved to DB")
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const deletePost = async (formData)=>{
    // 
    const {id} = Object.entries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id)
        revalidatePath("/blog")
        console.log("Deleted from DB")
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const handleGithubLogin = async()=>{
    "use server"
    await signIn("github")
}

export const handleLogout =async ()=>{
    "use server"
    await signOut("github")
}

export const register =async (previousState, formData)=>{
    "use server"
    const {username, email, password, confirmPassword, img} = Object.fromEntries(formData);

    if(password !== confirmPassword){
        return {error: "Password does not match"}
    }

    try {
        connectToDb();

        const user = await User.findOne({username});
        if(user){
            return {error: "User already exist"};
        }

        const salt = await bcrypt.gensalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User({
            username,
            email,
            password: hashedPassword,
            img
        });

        await newUser.asve();
        console.log("saved to DB");
        return {success: true}

    } catch (error) {
        console.log(error)
        return {error: "Something Went Wrong"}
    }
}

export const login =async (previousState, formData)=>{
    "use server"
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn("credentials", {username, password});
    } catch (error) {
        console.log(error)
        if(error.message.includes("CredentailsSignin")){
            return {error: "Invalid Username or password"}
        }
        throw new Error(error);
    }
}
