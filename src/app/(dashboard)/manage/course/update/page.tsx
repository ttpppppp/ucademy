import CourseUpdate from '@/components/course/CourseUpdate';
import Heading from '@/components/typography/Heading';
import { findCourseBySlug } from '@/lib/actions/courses.actions';
import React from 'react';

const Page = async ({ searchParams } : { searchParams: { slug: string } }) => {
  try {
    const data = await findCourseBySlug({ slug: searchParams.slug });
    return (
      <div>
        <Heading>Cập nhật khóa học</Heading>
        <CourseUpdate courseData={data} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching course data:', error);
    return (
      <div>
        <Heading>Cập nhật khóa học</Heading>
        <p>Error loading course data. Please try again later.</p>
      </div>
    );
  }
};

export default Page;

