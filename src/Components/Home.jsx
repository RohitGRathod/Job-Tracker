import React from 'react'
import JobCard from './JobCard'
import { useJobContext } from '../Context/UserContext'

function Home() {
    const {jobsinfo} = useJobContext()
    return (
      <>
     
      {jobsinfo.map(job => (
        <div key={job.id}>
          <JobCard jobinfo={job} />
        </div>
      ))}
    </>
    )
}

export default Home
