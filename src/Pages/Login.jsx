import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAdminLoginStore } from './LogincheckStore';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUserPassword } = useAdminLoginStore();
    const [message , setMessage] = useState('');


    function check() {
        if(username == '' || password == '')
        {
            alert("Please fill all the fields!")
        }
       else if (username == "sreeharis0022@gmail.com" && password == '1234') {
            alert("You are Logged in successfully!!")
            setUserPassword({ username, password });
            navigate('/')
        }
        else {
            setMessage("Invalid Username or Password !")
        }
    }


    return (
        <div className=' h-150 flex justify-center items-center '>
            <div className='border w-fit p-10 text-center rounded-3xl'>
                <h1 className='font-extrabold text-3xl'>Admin Login</h1><br />
                <p>Only Admin can Add/Remove Products</p><br />

                <table>
                    <tr>
                        <td className='p-10'>UserName :</td> <td><input type="text " placeholder='User Name' onChange={(event) => setUsername(event.target.value)} className='text-lg border pl-3' /></td>
                    </tr>
                    <tr>
                        <td>Password :</td> <td><input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} className='text-lg border pl-3' /></td>
                    </tr>
                    <tr>
                        <td className='pt-10' colSpan={2}><button className='border p-2 w-3xs font-bold rounded-3xl' onClick={() => check()}>Submit</button></td>
                    </tr>
                </table>
                 <h1 className='mt-5 text-red-500'>{message}</h1>
            </div>
       
        </div>
    )
}
