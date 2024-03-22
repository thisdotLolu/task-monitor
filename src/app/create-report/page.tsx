import React from 'react'
import Sidebar from '../../components/Sidebar';
import CreateReportComponent from '../../components/CreateReportComponent'


function CreateReportPage() {
  return (
    <div className='flex w-full'>
    <Sidebar/>
    <CreateReportComponent/>
</div>
  )
}

export default CreateReportPage;