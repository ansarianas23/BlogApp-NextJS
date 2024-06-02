import { connectToDb } from "@/lib/connectToDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

// API TO GET SINGLE POST
export const GET = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch Post!");
    }
}

// API TO DELETE SINGLE POST
export const DELETE = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const post = await Post.deleteOne({slug});
        return NextResponse.json("Post Deleted");
    } catch (error) {
        console.log(error)
        throw new Error("failed to delete Post!");
    }
}

// API TO UPDATE SINGLE POST
export const PATCH = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const post = await Post.findByIdAndUpdate(slug, request.body, {new: true});
        return NextResponse.json("Post Updated");
    } catch (error) {
        console.log(error)
        throw new Error("failed to update Post!");
    }
}