import { CourseGrid } from '@/components/common'
import Course from '@/components/course/Course'
import Heading from '@/components/typography/Heading'
import { getCourse } from '@/lib/actions/courses.actions'
import React from 'react'

const page = async () => {
  const course = await getCourse() || [];
  return (
    <div>
        <Heading>Khu vực học tập</Heading>
        <CourseGrid>
      {
        course?.length > 0 && course.map((courseItem, index) => (
          <Course key={index} data = {courseItem}/>
        ))
      }
    </CourseGrid>
    </div>
  )
}

export default page