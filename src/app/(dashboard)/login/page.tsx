"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios';
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
import slugify from "slugify"
import { createCourse } from "@/lib/actions/courses.actions"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { EcourseStatus } from "@/types/enums"

// Define your form schema according to the form fields
const formSchema = z.object({
  email: z.string().min(1, "Email không được bỏ trống"),
  password : z.string().min(1, "Password không được bỏ trống").regex(/[A-Z]/, "Phải bao gồm chữ in hoa"),
});

function CourseAddNew() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
        const response = await axios.post("http://localhost:8080/signin", {
            email: values.email,
            password: values.password,
        });

        if (response.data) {
            toast.error("Đăng nhập thất bại");
        } else {
            toast.success("Đăng nhập thành công");
        }

        // Xử lý dữ liệu trả về từ API
        console.log('Đăng nhập thành công:', response.data);

    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Xử lý lỗi liên quan đến axios
            console.error('Lỗi khi gửi yêu cầu:', error.response?.data || error.message);
        } else {
            // Xử lý lỗi không liên quan đến axios
            console.error('Lỗi không xác định:', error);
        }
        // Xử lý lỗi (thông báo cho người dùng hoặc các hành động khác)
        toast.error('Đã xảy ra lỗi khi gửi yêu cầu');
    } finally {
        setIsSubmitting(false);
    }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center  justify-center h-screen flex-col gap-2">
        <div className="w-96">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Add more FormField components if needed */}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-100">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
export default CourseAddNew;
