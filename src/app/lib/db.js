import mongoose from "mongoose";

export async function Mongo() {
    try {
        return await mongoose.connect(process.env.MONOGO_DB)
    } catch (error) {
        return console.log("Some Error Occured In DB Connection", error)
    }
}