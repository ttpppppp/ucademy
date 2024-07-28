"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import slugify  from "slugify"
import { createCourse } from "@/lib/actions/courses.actions"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    title : z.string().min(10 , "Tên khóa học ít nhất 10 ký tự"),
    slug : z.string().optional(),
    image : z.string().optional()
});

function CourseAddNew() {
    const router = useRouter();
    const [isSubmiting, setisSubmiting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title : "",
            slug : "",
            image : ""
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        setisSubmiting(true);
        try {
          const data = {
              title : values.title,
              slug : values.slug || slugify(values.title , {lower : true , locale : "vi"}),
              image : values.image
          }
          const res = await createCourse(data);
          if(res?.success){
            toast.success("Tạo khóa học thành công!");
          }else{
            toast.error(res?.message);
          }
          if(res?.data){
            router.push(`/manage/course/update?slug=${res.data.slug}`);
          }
          
        } catch (error) {
          
        }finally{
            setisSubmiting(false);
            form.reset();
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
              <FormLabel>Tên khóa học *</FormLabel>
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
        </div>
        <Button isLoading = {isSubmiting} type="submit" className="w-[120px]" disabled = {isSubmiting}>Tạo khóa học</Button>
      </form>
    </Form>
  )
}
export default CourseAddNew;