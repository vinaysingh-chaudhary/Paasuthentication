import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String, 
        required: true,
        unique:true
    }, 

    email:{
        type: String, 
        required:true, 
        lowercase: true
    },

    password: {
        type: String, 
        required:true
    },

    isVerified : {
        type: Boolean,
        default:false
    },

    // role: {
    //     type: String, 
    //     enum:["ADMIN", "USER"],
    //     required:true
    // },
    forgotPasswordToken : String, 
    forgotPasswordTokenExpiry: Date,
    verifyToken : String,
    verifyTokenExpiry: Date,

}); 

const User = mongoose.models.users || mongoose.model("User", userSchema);  
export default User; 