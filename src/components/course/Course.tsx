import { IconClock, IconEye, IconStar } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Course = () => {
    const courseInfo = [
        {
            title : "1000",
            icon : (className ?: string ) => <IconEye className= {className}></IconEye>
        },
        {
            title : "5.0",
            icon : (className ?: string ) => <IconStar className= {className}></IconStar>
        },
        {
            title : "30h25phút",
            icon : (className ?: string ) => <IconClock className= {className}></IconClock>
        }
    ];
  return (
    <div className="course-item bg-white dark:bg-grayDarker dark:border-opacity-10 border border-gray-200 p-4 rounded-lg">
        <Link href="/" className="block h-[180px] relative">
            <Image 
                src="https://cdn.dribbble.com/users/1307006/screenshots/5868358/media/f8294af227dc8cddbe4146bd4fc30752.png?resize=1000x750&vertical=center" 
                alt="image"
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
                sizes='@media (min-width : 640px) : 300px , 100vw'
                priority
            />
            <span className='
            absolute inline-block px-3 py-1 top-3 right-3 z-10 bg-green-500 rounded-full text-white font-medium text-xs'>
                New
            </span>
        </Link>
        <div className="py-4 text-lg">
            <h3 className='font-bold'>Khóa học NextJs Pro - Xây dụng hệ thống E-leaning</h3>
        </div>
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-grayDark">
            {courseInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {item.icon("size-4")}
                    <span>{item.title}</span>
                </div>
            ))}
            <span className='font-bold text-primary ml-auto text-base'>100.000đ</span>
        </div>
        <Link href= "/" className='flex items-center justify-center w-full h-12 rounded-lg text-white font-bold bg-primary '>Xem chi tiết</Link>
    </div>
  );
};

export default Course;
