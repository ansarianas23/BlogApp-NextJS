import NextAuth from "next-auth"
import GitHub from "next-auth/poroviders/github"
import { connectToDb } from "./connectToDB";
import { User } from "./models";
export const {handlers:{GET, POST}, auth, signIn, signOut} = NextAuth({
    provider: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET})
    ],
    callbacks:{
        async signIn({user,acoount, profile}){
            if(acoount.provider === 'github'){
                connectToDb();
                try {
                    const user = await User.findOne({email: profile.email});
                    if(!user){
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        }
    }
});