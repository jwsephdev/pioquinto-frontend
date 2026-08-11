import { useState } from "react";



function Task2() {

    const [count, setCount] = useState(0)
    const [statusText, setStatus] = useState('Pending')

    let deadLine = '2026-09-06'
    let assRole = 'Photojournalist'


    function handleStatus() {
        
        setCount((count) => count + 1)

        if (count >= 2) {
            setCount(0)
        }

        if (count == 0) {
        setStatus('Pending')
        }
        else if (count == 1) {
            setStatus('In Progress')
        }
        else if (count == 2) {
            setStatus('Completed')
        }

        

        console.log(count)
    }
    

  return (
   <div className=" rounded-xl px-30 py-8 text-white bg-sky-900 mx-3">

    <h1 className='text-3xl font-semibold mb-3'>Take Event Photos</h1>
    <p className='my-3 text-xl'>Assigned Role: {assRole}</p>
    <p className="my-3 text-xl">Deadline: {deadLine}</p>
    <p className='my-3 text-xl'>Status: {statusText}</p>
    

    <button type='button' className="bg-white text-black font-semibold p-2 rounded-2xl" onClick={handleStatus}>Update Status</button>

   </div>

  )
}

export default Task2
