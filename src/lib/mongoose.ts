"use server";

import mongoose from "mongoose";

let isConnect = false;

export const connectDataBase = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not set");
    }
    if (isConnect) {
        console.log("Database is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "ucademy",
        });
        isConnect = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
