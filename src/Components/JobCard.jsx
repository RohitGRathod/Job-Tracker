import React, { useState } from 'react'
import { useJobContext } from '../Context/UserContext'
import '../App.css'
import { format } from 'date-fns'
function JobCard({ jobinfo }) {
    const [iseditable, setIseditable] = useState(false)
    const [jTitle, setJTitle] = useState(jobinfo.jobTitle)
    const [cTitle, setCTitle] = useState(jobinfo.companyTitle)
    const [state, setState] = useState(jobinfo.status)
    const { editjobinfo, deletejobinfo } = useJobContext()

    const editinfo = () => {
        editjobinfo(jobinfo.id, { id: jobinfo.id, jobTitle: jTitle, companyTitle: cTitle, status: state })
        setIseditable(false)
    }
    const deleteinfo = () => {
        deletejobinfo(jobinfo.id)
    }
    return (
        <div>
            <div className='card border-primary m-3 shadow-sm' style={{ width: "22rem", backgroundColor: "#f8f9fa" }}>
                <div>

                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor='jobtitle'>Job Title:</label>
                            <input type='text' className='form-control' value={jTitle} onChange={(e) => setJTitle(e.target.value)} readOnly={!iseditable} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='companytitle'>Company Name:</label>
                            <input type='text' className='form-control' value={cTitle} onChange={(e) => setCTitle(e.target.value)} readOnly={!iseditable} />
                        </div>
                        <div className="mb-3">
                            <p className='mb-1'><strong>Date:</strong> {jobinfo.date}</p>
                        </div>
                        <div className="mb-3">
                            <p className='mb-1'><strong>Last Date:</strong>
                                {jobinfo.deadline ? format(new Date(jobinfo.deadline), "dd MMM yyyy") : ""}
                            </p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='status'>Status:</label>
                            <select className='form-select' value={state} onChange={(e) => setState(e.target.value)} disabled={!iseditable}>
                                <option value="applied">Applied</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>

                        <button className='ms-5 mb-2 btn btn-primary w-45' onClick={() => {
                            if (jobinfo.completed)
                                return
                            if (iseditable) editinfo();
                            else setIseditable((prev) => !prev)
                        }}
                            disabled={jobinfo.completed}
                        >
                            {iseditable ? "save" : " Edit"}
                        </button>
                        <button className='me-5 mb-2 btn btn-danger w-45' onClick={deleteinfo}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
