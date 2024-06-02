import { connectToDb } from "@/lib/connectToDB";
import { Post, User } from "@/lib/models";
import { NextResponse } from "next/server";

// API TO GET SINGLE USER
export const GET = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const user = await User.findOne({slug});
        return NextResponse.json(user);
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch User!");
    }
}

// API TO DELETE SINGLE USER
export const DELETE = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const user = await User.deleteOne({slug});
        return NextResponse.json("User Deleted");
    } catch (error) {
        console.log(error)
        throw new Error("failed to delete User!");
    }
}

// API TO UPDATE SINGLE USER
export const PATCH = async (request, {params})=>{
    const {slug} = params;

    try {
        connectToDb();
        const updateUser = await Post.findByIdAndUpdate(slug, request.body, {new: true});
        return NextResponse.json(updateUser,"User Updated");
    } catch (error) {
        console.log(error)
        throw new Error("failed to update User!");
    }
}