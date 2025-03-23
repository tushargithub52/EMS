import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("submitted")
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
                SubmitHandler(e)
            }}
            className='flex flex-col items-center justify-center gap-8'>
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required type="email" placeholder='Enter your email' className='border-2 border-emerald-600 rounded-full outline-none bg-transparent text-xl font-semibold px-5 py-4  placeholder:text-gray-400'/>
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required type="password" placeholder='Enter your password' className='border-2 border-emerald-600 rounded-full outline-none bg-transparent text-xl font-semibold px-5 py-4  placeholder:text-gray-400' />
                <button className='border-none bg-emerald-600 rounded-full outline-none text-xl font-semibold px-5 py-4 text-gray-300 w-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login