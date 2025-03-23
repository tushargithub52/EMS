import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='bg-blue-600 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-4xl font-bold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-green-600 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-4xl font-bold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-3xl font-semibold'>Completed</h3>
        </div>
        <div className='bg-yellow-600 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-4xl font-bold'>{data.taskNumbers.active}</h2>
            <h3 className='text-3xl font-semibold'>Accepted</h3>
        </div>
        <div className='bg-orange-600 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className='text-4xl font-bold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-3xl font-semibold'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers