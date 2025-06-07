import { createContext, useContext } from "react";

export const JobContext = createContext({
    jobsinfo:[
        {
        id:1,
        jobTitle:"title",
        companyTitle:"company title",
        status:"applied",
        date: new Date().toISOString().split('T')[0]
        
        }
    ],
    addjobinfo:(jobinfo)=>{},
    editjobinfo:(id,jobinfo)=>{},
    deletejobinfo:(id)=>{}
})

export const JobProvider = JobContext.Provider

export const useJobContext = () =>{
    return useContext(JobContext)
}
