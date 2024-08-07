"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { findCourseBySlug, updateCourse } from "@/lib/actions/courses.actions"
import { ICourse } from "@/database/course.model"
import { toast } from "react-toastify"

const formSchema = z.object({
    title : z.string().min(10 , "Tên khóa học ít nhất 10 ký tự"),
    slug : z.string().optional(),
    image : z.string().optional(),
    price : z.coerce.number(),
});

function CourseUpdate({courseData} : {courseData : ICourse}) {
    console.log(courseData);
  
    const router = useRouter();
    const [isSubmiting, setisSubmiting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title : courseData.title,
            slug : courseData.slug,
            image : courseData.image,
            price : courseData.price
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        setisSubmiting(true);
        try {
          const res = await updateCourse({ slug: courseData.slug, updateData : values })
          setisSubmiting(false);
          toast.success("Cập nhật thành công");
        } catch (error) {
          toast.error("Cập nhật thất bại");
          console.log(error);
        }
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên khóa học</FormLabel>
              <FormControl>
                <Input placeholder="Tên khóa học" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đường dẫn khóa học</FormLabel>
              <FormControl>
                <Input placeholder="khoa-hoc-lap-trinh" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đường dẫn hình ảnh khóa học</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá khóa học</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button isLoading = {isSubmiting} type="submit" className="w-[120px]" disabled = {isSubmiting}>Cập nhật</Button>
      </form>
    </Form>
  )
}
export default CourseUpdate