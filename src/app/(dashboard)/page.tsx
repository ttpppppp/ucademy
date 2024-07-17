import { CourseGrid } from '@/components/common'
import Course from '@/components/course/Course'
import Heading from '@/components/typography/Heading'
import createUser from '@/lib/actions/user.actions'
import React from 'react'

const  pages = async () => {
  const user = await createUser({
    clerkId : "12345",
    email : "thuha@gmail.com",
    username : "thuha"
  })
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
          <Course></Course>
          <Course></Course>
          <Course></Course>
      </CourseGrid>
    </div>
  )
}

export default pages