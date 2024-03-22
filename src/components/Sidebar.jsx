'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='w-[200px] h-screen border-r p-3 flex flex-col items-center justify-start fixed'>
        <p className='text-[1.5rem] w-full font-semibold text-white text-center logo'>reportbrief</p>

        <div className='w-full h-fit p-3 text-white text-center mt-5'>
           <Link
           href='/dashboard'
           className={clsx('hover:bg-black w-full block rounded-lg p-2',pathname.startsWith('/dashboard')?'bg-black':'')}
           >Dashboard</Link> 
        </div>
        <div className='w-full h-fit p-3 text-white text-center'>
            <Link
            href='/create-report'
            className={clsx('hover:bg-black w-full block rounded-lg p-2',pathname.startsWith('/create-report')?'bg-black':'')}
            >Create Report</Link>
        </div>
        <div className='w-full h-fit p-3 text-white text-center'>
            <Link
            href='timeline'
            className={clsx('hover:bg-black w-full block rounded-lg p-2',pathname.startsWith('/timeline')?'bg-black':'')}
            >Timeline</Link>
        </div>
    </div>
  )
}

export default Sidebar