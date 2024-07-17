import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  const iconArrowLeft = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
  </svg>);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-7xl'>404</h1>
        <h2 className='mb-5'>Page not found</h2>
        <Link href= "/" className='flex items-center justify-center gap-2 hover:text-primary'>
        {iconArrowLeft}
          <span className="underline">Trang chủ</span>
        </Link>
    </div>
  )
}

export default PageNotFound