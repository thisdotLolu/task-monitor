import Sidebar from '../../components/Sidebar';
import DashboardComponent from '../../components/DashboardComponent';
import React from 'react';

function Dashboardpage() {
  return (
    <div className='flex w-full'>
        <Sidebar/>
        <DashboardComponent/>
    </div>
  )
}

export default Dashboardpage;