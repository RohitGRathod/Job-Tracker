import { useState,useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'
import { JobProvider } from './Context/UserContext'




function App() {
const[jobsinfo,setJobsinfo] = useState([])
const addjobinfo=(jobinfo)=>{
  setJobsinfo((prev)=>([...prev,{...jobinfo}]))
}
const editjobinfo=(id,jobinfo)=>{
  setJobsinfo((prev)=>prev.map((job)=>(job.id == id ? jobinfo : job)))
}
const deletejobinfo=(id)=>{
  setJobsinfo((prev)=>(prev.filter((job)=> job.id != id)))
}

useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobs"))

    if (jobs && jobs.length > 0) {
      setJobsinfo(jobs)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobsinfo))
  }, [jobsinfo])


  return (
   <>
   <JobProvider value={{addjobinfo,jobsinfo,editjobinfo,deletejobinfo}}>
    <div className='vw-100 vh-100' style={{backgroundColor:" #e7f0fd"}}>

    <div>

   <Navbar/>
    </div>
    <div className='d-flex justify-content-center flex-wrap' >

   <Outlet/>
    </div>
    </div>
   </JobProvider>
    </>
  )
}

export default App
