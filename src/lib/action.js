"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import {Post} from './models'

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