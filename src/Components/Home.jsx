import React from 'react'
import JobCard from './JobCard'
import { useJobContext } from '../Context/UserContext'
import { Link } from 'react-router-dom'


function Home() {
    const {jobsinfo} = useJobContext()
    return (
      <>
     
      {jobsinfo && jobsinfo.length > 0 ?  (jobsinfo.map(job => (
        <div key={job.id}>
          <JobCard jobinfo={job} />
        </div>) 
      )) : <strong>Click here to add the jobs <Link to='/addjob'>click here</Link></strong>
    }
    </>
    )
}

export default Home
