import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    
    const [userData,setUserData] =  useContext(AuthContext)


    return (

        <div id='AllTask' className='bg-[#1c1c1c] mt-5 p-5 rounded'>

            <div className='flex justify-between rounded bg-red-500 px-4 py-2 mb-2 '>
                <h2 className='w-1/5 font-medium text-lg'>Employee Name</h2>
                <h3 className='w-1/5 font-medium text-lg'>Active Tasks</h3>
                <h5 className='w-1/5 font-medium text-lg'>Completed Tasks</h5>
                <h5 className='w-1/5 font-medium text-lg'>New Tasks</h5>
                <h5 className='w-1/5 font-medium text-lg'>Failed Tasks</h5>
            </div>

            <div className='h-[80%]'>
                {userData.map((emp, idx) => {
                    return <div key={idx} className='flex justify-between rounded bg-black-600 px-4 py-2 mb-2 border-emerald-600 border-2'>
                        <h2 className='w-1/5 font-medium text-lg'>{emp.firstname}</h2>
                        <h3 className='w-1/5 text-blue-600 font-medium text-lg'>{emp.taskNumbers.active}</h3>
                        <h5 className='w-1/5 text-green-600 font-medium text-lg'>{emp.taskNumbers.completed}</h5>
                        <h5 className='w-1/5 text-yellow-600 font-medium text-lg'>{emp.taskNumbers.newTask}</h5>
                        <h5 className='w-1/5 text-red-600 font-medium text-lg'>{emp.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask