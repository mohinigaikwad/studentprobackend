import mongoose from "mongoose";

const db = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log("Db connected");
        
    } catch (error) {
        console.log("error he bahi");
        
    }
}
 
 export default db