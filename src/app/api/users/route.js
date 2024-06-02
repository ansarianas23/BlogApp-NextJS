import { User } from "@/lib/models";

// API TO GET ALL USERS
export const GET = async (request)=>{
    try {
        connectToDb();
        const users = await User.find();
        return NextResponse.json(users);


    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch Users!");
    }
}

