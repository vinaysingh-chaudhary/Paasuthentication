import {connectDB} from '@/dbConfig/dbConfig'
import User from '@/models/user.model'
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connectDB(); 

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json(); 
        console.log(requestBody); 
        const {username, email, password} = requestBody; 

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return NextResponse.json({
            message: "User already exists",
            success: false,
          });
        }

        //hash the password 
        const salt = await bcryptjs.genSalt(10); 
        const hashPassword = await bcryptjs.hash(password, salt); 

        const newUser = new User({
            username, 
            email, 
            password : hashPassword
        })

        const saveUser = await newUser.save()
        console.log(saveUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: saveUser,
          });
        
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}); 
    }
}


