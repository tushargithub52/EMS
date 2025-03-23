import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {
  

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  const [userData, SetUserData] = useContext(AuthContext)

  console.log(userData)
  
  const displayName =
    props.role === 'employee'
      ? props?.data?.firstname || 'Guest' // Default to 'Guest' if firstname is unavailable
      : 'admin';


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-4xl font-semibold'> 👋</span></h1>
        <button onClick={logOutUser} className='px-4 py-2 bg-red-600 rounded-md font-semibold text-xl'>Log Out</button>
    </div>
  )
}

export default Header