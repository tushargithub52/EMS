import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        SetLocalStorage()
        const {employees} = GetLocalStorage()
        setUserData(employees)
    },[])
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider