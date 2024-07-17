"use server"

import User, { IUser } from "@/database/user.model";
import { connectDataBase } from "../mongoose"
import { TcreateUserParam } from "@/types";

export default async function createUser(params : TcreateUserParam){
    try {
        connectDataBase();
        const newUser = await User.create(params);
        return newUser;

    } catch (error) {
        console.log(error);
    }
}