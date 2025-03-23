import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full h-[45%] py-5 mt-10 rounded-lg'>
        {data.tasks.map((elem, idx) => {
            if (elem.active) {
                return <AcceptTask key={idx} data={elem} />
            }
            if (elem.completed) {
                return <CompleteTask key={idx} data={elem} />
            }
            if (elem.newTask) {
                return <NewTask key={idx} data={elem} />
            }
            if (elem.failed) {
                return <FailedTask key={idx} data={elem} />
            }
        })}
    </div>
  )
}

export default TaskList