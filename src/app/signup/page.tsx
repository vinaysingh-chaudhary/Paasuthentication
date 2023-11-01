"use client"; 

import React from 'react';
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';



const SignUp = () => {

    const router = useRouter()
    const [user, setUserData] = React.useState({
        username: "",
        email:"",
        password:""
    })

    const signUp = async() => {
        try {
            const response = await axios.post("/api/users/signup", user); 
            router.push("/login"); 

        } catch (error: any) {
            console.log(error); 
        }
    }


    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-3 ">
            <h1 className=" text-2xl">SignUp Authentication NextJS</h1>
            <label htmlFor='username'>Username:</label>
            <input type="text" name="" id="username" className=' rounded-md text-black'  value={user.username}
            onChange={(event) => setUserData({...user, username : event.target.value})}
            />

            <label htmlFor='email'>Email:</label>
            <input type="email" name="" id="email" className=' rounded-md text-black' value={user.email}
             onChange={(event) => setUserData({...user, email : event.target.value})}
            />

            <label htmlFor='password'>Password:</label>
            <input type="password" name="" id="password" className=' rounded-md text-black' value={user.password}
             onChange={(event) => setUserData({...user, password : event.target.value})}
            />

            <button className=' p-4 bg-black text-white border rounded-lg shadow-md shadow-white'
                onClick={() => signUp()}
            >SignUp</button>

            <Link  href={"/login"} className='text-white'>Visit login page</Link>
        </div>
    )
}

export default SignUp; 