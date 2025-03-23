import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm font-semibold px-3 py-1 rounded-md'>{data.category}</h3>
                <h4 className='font-bold text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-2 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-3'>
                <button className='w-full bg-red-500'>Failed !!</button>
            </div>
        </div>
    )
}

export default FailedTask