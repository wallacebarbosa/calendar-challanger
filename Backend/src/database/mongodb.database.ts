import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI || "mongodb+srv://wallacebb:3nXNBZT8WzcchSDl@cluster0.mf3nc.mongodb.net/";

export const dbconnection = async () => await mongoose.connect(MONGO_URI).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Error connecting to database", error);
});

