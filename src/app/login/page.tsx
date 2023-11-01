"use client"; 

import React from 'react';
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';



const LoginPage = () => {

    const router = useRouter(); 
    const [user, setUserData] = React.useState({
        email:"",
        password:""
    })

    const logIn = async() => {
        try {
            const response = await axios.post("/api/users/login", user); 
            router.push("/")
        } catch (error) {
            console.log(error); 
        }
    }


    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-3 ">
            <h1 className=" text-2xl">LogIn Authentication NextJS</h1>

            <label htmlFor='email'>Email:</label>
            <input type="email" name="" id="email" className=' rounded-md text-black' value={user.email}
             onChange={(event) => setUserData({...user, email : event.target.value})}
            />

            <label htmlFor='password'>Password:</label>
            <input type="password" name="" id="password" className=' rounded-md text-black' value={user.password}
             onChange={(event) => setUserData({...user, password : event.target.value})}
            />

            <button className=' p-4 bg-black text-white border rounded-lg shadow-md shadow-white'
                onClick={() => logIn()}
            >  login user</button>

            <Link  href={"/signup"} className='text-white'>Visit signup page</Link>
        </div>
    )
}

export default LoginPage; 