import React from 'react'
import Course from '../course/Course'

const Heading = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3xl font-bold mb-5'>{children}</h1>
    </div>
  )
}

export default Heading