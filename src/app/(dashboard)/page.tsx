import { CourseGrid } from '@/components/common'
import ApiButton from '@/components/course/ButtonApi'
import Course from '@/components/course/Course'
import Heading from '@/components/typography/Heading'
import { getCourse } from '@/lib/actions/courses.actions'
import { createUser } from '@/lib/actions/user.actions'
import React from 'react'

const Pages = async () => {
  const course = await getCourse() || [];
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {
          course?.length > 0 && course.map((courseItem, index) => (
            <Course key={index} data={courseItem}/>
          ))
        }
      </CourseGrid>
    </div>
  )
}

export default Pages
