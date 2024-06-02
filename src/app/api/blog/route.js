import { connectToDb } from "@/lib/connectToDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

// API TO GET ALL POSTS
export const GET = async (request)=>{
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);


    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch Posts!");
    }
}