import React, { useState } from 'react'
import { useJobContext } from '../Context/UserContext'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function AddJob() {
    const [state, setState] = useState("applied")
    const [jTitle, setJTitle] = useState("")
    const [cTitle, setCTitle] = useState("")
    const [startDate, setStartDate] = useState(null);
    const { addjobinfo } = useJobContext()

    const add = (e) => {
        e.preventDefault()
        const today = new Date().toISOString().split('T')[0]
        addjobinfo({ id: Date.now(), jobTitle: jTitle, companyTitle: cTitle, status: state, date: today, deadline: startDate })
        setCTitle("")
        setJTitle("")
        setStartDate(null)
        alert("Job added")
    }

    return (
        <div className='container mt-5 p-4 rounded shadow-sm' style={{ maxWidth: "500px", backgroundColor: "#ffffff" }}>
            <form onSubmit={add}>
                <div className="mb-3 ">
                    <label htmlFor="Jobtitle" className="form-label ">Job Title</label>
                    <input type="text" value={jTitle} className="form-control  bg-light text-dark" id="jobtitle" onChange={(e) => setJTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Companyname" className="form-label">Company Name</label>
                    <input type="text" className="form-control bg-light text-dark" id="company name" value={cTitle} onChange={(e) => setCTitle(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <select className='bg-light text-dark' value={state} onChange={(e) => setState(e.target.value)} >
                        <option value="applied">Applied</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div>
                    <DatePicker className='bg-light border border-dark text-dark'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        isClearable
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100 m-3">Add</button>
            </form>
        </div>
    )
}

export default AddJob
