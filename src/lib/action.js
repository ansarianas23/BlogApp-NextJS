"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import {Post, User} from './models'
import { signIn, signOut } from "./auth";

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

export const register =async (formData)=>{
    "use server"
    const {username, email, password, confirmPassword, img} = Object.fromEntries(formData);

    if(password !== confirmPassword){
        return "Password does not match"
    }

    try {
        connectToDb();

        const user = await User.findOne({username});
        if(user){
            return "User already exist";
        }

        const newUser = await User({
            username,
            email,
            password,
            img
        })

        await newUser.asve();
        console.log("saved to DB");
    } catch (error) {
        console.log(error)
        return {error: "Something Went Wrong"}
    }
}

