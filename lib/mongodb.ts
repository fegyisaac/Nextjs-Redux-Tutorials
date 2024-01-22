import mongoose from "mongoose";

export const connectMongoDB = async ( => {
try {
    await mongoose.connect("kj")
} catch (error) {
    console.log("error conneting", error)
}    
})