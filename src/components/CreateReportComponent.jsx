"use client";
import React, { useState } from "react";
import SelectComponent from '../components/SelectComponent'

const priorityLevels = [
    {listItem:'High'},
    {listItem:'Medium'},
    {listItem:'Low'}
]


function CreateReportComponent() {
  const [assigneeName, setAssigneeName] = useState("");
  const [assigneeDepartment, setAssigneeDepartment] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [citizenName,setCitizenName] = useState("");
  const [priorityLevel, setPriorityLevel] = useState(priorityLevels[0]);
  // const [,setAssigneeName] = useState('')
  // const [,setAssigneeName] = useState('')
  return (
    <div className="ml-[200px] w-full p-10">
      <p className="mb-8 mt-3 text-[1.5rem] font-semibold text-white">
        Create Report
      </p>

      <div className="flex w-full justify-between">
        <div className="w-[45%]">
          <label htmlFor="nameAssignee">
            <p className="text-[.8rem] text-white">
              Name of Task/Report Assignee:
            </p>
            <input
              value={assigneeName}
              onChange={(e) => setAssigneeName(e.target.value)}
              id="nameAssignee"
              type="text"
              placeholder="Enter name of the task assignee"
              className="mb-5 w-full rounded-md border bg-transparent p-2 text-white placeholder:text-[.8rem]"
            />
          </label>
          <label htmlFor="reportTitle">
            <p className="text-[.8rem] text-white">Task Title (give the report/task a short title):</p>
            <input
              // value={}
              // onChange={}
              id="reportTitle"
              type="text"
              placeholder="For example: Porthole Problem"
              className="mb-5 w-full rounded-md border bg-transparent p-2 text-white placeholder:text-[.8rem]"
            />
          </label>
          <label htmlFor="asigneeDepartment">
            <p className="text-[.8rem] text-white">
              Department of Task/Report Assignee (District Point Person/District Maintenance Engineer/District Maintenance Crew):
            </p>
            <input
              value={assigneeDepartment}
              onChange={(e) => setAssigneeDepartment(e.target.value)}
              id="assigneeDepartment"
              type="text"
              placeholder="Enter the department of the assignee"
              className="mb-5 w-full rounded-md border bg-transparent p-2 text-white placeholder:text-[.8rem]"
            />
          </label>
          <label htmlFor="reportDesc">
            <p className="text-[.8rem] text-white">Report / Task Description:</p>
            <textarea
              value={reportDescription}
              onChange={(e) => setReportDescription(e.target.value)}
              id="reportDesc"
              type="text"
              placeholder="A very detailed description about the report or task"
              className="mb-5 w-full rounded-md border bg-transparent h-[150px] p-2 text-white placeholder:text-[.8rem]"
            />
          </label>
         
        </div>


        <div className="w-[45%]">
        <p className='text-white text-[.8rem]'>Select Role</p>
        <SelectComponent
        selected={priorityLevel}
        setSelected={setPriorityLevel}
        containerClassName='mb-4'
        list={priorityLevels}
        />

          <label htmlFor="citizenName">
            <p className="text-[.8rem] text-white">Customer/Citizen name (if any):</p>
            <input
              // value={}
              // onChange={}
              id="citizenName"
              type="text"
              placeholder="Enter Citizen Name"
              className="mb-5 w-full rounded-md border bg-transparent p-2 text-white placeholder:text-[.8rem]"
            />
          </label>
          
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default CreateReportComponent;
