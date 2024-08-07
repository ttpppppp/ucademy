"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useImmer } from "use-immer";
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
import { EcourseStatus } from "@/types/enums"

const formSchema = z.object({
    title : z.string().min(10 , "Tên khóa học ít nhất 10 ký tự"),
    slug : z.string().optional(),
    image : z.string().optional().optional(),
    price : z.coerce.number().optional(),
    sale_price : z.coerce.number().optional(),
    intro_url : z.string().optional(),
    description : z.string().optional(),
    view : z.coerce.number(),
    status : z.enum([
      EcourseStatus.APPROVED,
      EcourseStatus.PENDING,
      EcourseStatus.REJECTED
    ]),
    info: z.object({
      requirements: z.array(z.string()).optional(),
      benefits: z.array(z.string()),
      qa: z.array(
          z.object({
              question: z.string(),
              answer: z.string()
          })
      )
  })
});

function CourseAddNew() {
    const router = useRouter();
    const [isSubmiting, setisSubmiting] = useState(false);
    const [courseInfo, setcourseInfo] = useImmer({
        requirements: [""],
        benefits: [""],
        qa: [{ question: "", answer: "" }],
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title : "",
            slug : "",
            image : "",
            price : Number(0),
            sale_price : Number(0),
            intro_url : "",
            view : Number(0),
            description : "",
            status : EcourseStatus.PENDING
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        
        setisSubmiting(true);
        try {
          const data = {
              title : values.title,
              slug : values.slug || slugify(values.title , {lower : true , locale : "vi"}),
              image : values.image,
              price : Number(values.price),
              sale_price : Number(values.sale_price),
              intro_url : values.intro_url,
              description : values.description,
              view : values.view,
              requirements: [""],
              benefits: [""],
              qa: [{ question: "", answer: "" }],
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
        <FormField
          control={form.control}
          name="intro_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đường dẫn video</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}/>
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
        <FormField
          control={form.control}
          name="sale_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá giảm khóa học</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mô tả khóa học</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="view"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lượt xem</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="view"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lượt xem</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="info.requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex items-center gap-2">
                    <span>Yêu cầu</span>
                    <button onClick={(e) => {
                      setcourseInfo((draft)=>{
                        draft.requirements.push("");
                      })
                    }}>Add</button>
                </div>
              </FormLabel>
              <FormControl>
              <>
                {courseInfo.requirements.map((item, index) => (
                     <Input key = {index} placeholder= {`Yêu cầu thứ ${index}`} {...field} 
                      onChange={(e) =>{
                        setcourseInfo((draft)=>{
                          draft.requirements[index] = e.target.value;
                        })
                      }}
                     />
                  ))}
              </>
  
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