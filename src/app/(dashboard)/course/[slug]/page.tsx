import { Button } from '@/components/ui/button';
import { findCourseBySlug } from '@/lib/actions/courses.actions';
import Image from 'next/image';
import React from 'react';

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await findCourseBySlug({slug : params.slug});
  return (
    <div className='grid grid-cols-2 gap-10 h-screen'>
     <div>
      <div className='relative aspect-video'>
          <Image
            src= {data.image}
            alt=""
            fill
            className=' object-cover rounded-lg'
          />
      </div>
      <h1 className='font-bold text-3xl my-5'>{data.title}</h1>
      <h2 className='font-bold text-xl mb-2'>Mô tả</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam harum perferendis veniam. Accusamus maiores ipsam eaque, eligendi earum sequi!
      </div>
      <h2 className='font-bold text-xl mb-2'>Yêu cầu</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam harum perferendis veniam. Accusamus maiores ipsam eaque, eligendi earum sequi!
      </div>
      <h2 className='font-bold text-xl mb-2'>Lợi ích</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam harum perferendis veniam. Accusamus maiores ipsam eaque, eligendi earum sequi!
      </div>
     </div>
     <div>
      <div className="bg-white rounded-lg p-5">
       <div className="flex items-center gap-3">
        <strong className='text-primary'>300.000đ</strong>
        <span className='text-slate-500 line-through'>1.000.000</span>
       </div>
       <Button className='w-full bg-primary my-2'>Mua khóa học</Button>
      </div>
     </div>
    </div>
  );
};

export default Page;
