import { CourseGrid } from '@/components/common'
import Course from '@/components/course/Course'
import Heading from '@/components/typography/Heading'
import React from 'react'

const page = () => {
  return (
    <div>
        <Heading>Khu vực học tập</Heading>
        <CourseGrid>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </CourseGrid>
    </div>
  )
}

export default page