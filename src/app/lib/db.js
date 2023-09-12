import mongoose from "mongoose";

export async function Mongo() {
    try {
        let db = await mongoose.connect(process.env.MONOGO_DB)
        console.log("connection--", mongoose.STATES[mongoose.connection.readyState])
        return db

    } catch (error) {
        return console.log("Some Error Occured In DB Connection", error)
    }
}