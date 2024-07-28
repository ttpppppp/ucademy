"use server"

import User, { IUser } from "@/database/user.model";
import { connectDataBase } from "../mongoose"
import { TcreateUserParam } from "@/types";

export async function createUser(params : TcreateUserParam){
    try {
        await connectDataBase();
        const newUser = await User.create(params);
        return newUser;

    } catch (error) {
        console.log(error);
    }
}
export async function getUserInfo({ userId }: { userId: string }): Promise<IUser | null | undefined> {
    try {
        await connectDataBase(); // Assuming this is an async operation
        const findUser = await User.findOne({ clerkId: userId });
        if (!findUser) return null;
        return findUser;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}