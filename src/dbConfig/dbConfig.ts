import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection; 

        connection.on("connected", () => {
            console.log("Connected Succesfully with DataBase");
        })

        connection.on("error", (error) => {
            console.log("There's some error in Database Connection", + error); 
            process.exit();
        })

        

    }catch(error){
        throw(error); 
    }
}; 