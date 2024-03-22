'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function DashboardComponent() {
  const router = useRouter()
  return (
    <div className='w-full ml-[200px]'>
      <p className='text-[1.5rem] ml-4 font-semibold mt-5 text-white'>Dashboard</p>

      <div className='w-full h-[70vh] flex justify-center items-center flex-col'>
        <p className='text-white'>No active reports</p>
        <button 
        onClick={()=>router.push('/create-report')}
        className='bg-black p-2 rounded-md text-white mt-4'>
          Create Report
        </button>
      </div>
    </div>
  )
}

export default DashboardComponent;