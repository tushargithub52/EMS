import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    
    

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
          };

        const data = userData
        
        data.forEach(function (elem) {
            if (assignTo == elem.firstname) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })

        setUserData(data)
        console.log(data)

        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('')
    }
  return (
    <div className='mt-7 p-5 bg-[#1C1C1C]'>
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex w-full flex-wrap items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text" placeholder='Make a UI Design' className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input 
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            type="text" placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input 
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text" placeholder='Design, Development, etc...' className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'/>
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        cols="30" rows="10" placeholder='Detailed description of task(max. 500 words)' className='w-full h-45 text-sm py-2 px-4 rounded bg-transparent border-[1px] outline-none border-gray-400 mb-4'></textarea>
                        <button className='px-5 py-3 bg-emerald-600 hover:bg-emerald-700 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask