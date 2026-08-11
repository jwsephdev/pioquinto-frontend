import Task1 from "./task1"
import Task2 from "./task2"
import Task3 from "./task3"

function Header() {
  return (
   <div className="mb-2s0 mt-10">

    <h1 className='text-5xl text-center font-semibold m-2 mb-7'>Dashboard</h1>
    <div className="flex flex-col flex-wrap gap-6 mx-10">
      <Task1 />
      <Task2 />
      <Task3 />


    </div>

    <p className="m-10 mt-50 opacity-15">i would like to apologize for not completing the summary of statuses huhu</p>
   </div>


  )
}

export default Header
