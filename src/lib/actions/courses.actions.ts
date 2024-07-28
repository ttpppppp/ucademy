"use server"
import { TcreateCourse, TUpdateCourse } from "@/types";
import { connectDataBase } from "../mongoose";
import Course, { ICourse } from "@/database/course.model";
import { revalidatePath } from "next/cache";


export async function getCourse() : Promise<ICourse[] | undefined>  {
    try {
        connectDataBase();
        const course = await Course.find().sort({created_at : -1});
        return course;
    } catch (error) {
        
    }
}
export async function findCourseBySlug({slug} : {slug : string}) {
    try {
        connectDataBase();
        const course = Course.findOne({slug});
        return course;
    } catch (error) {
        
    }
}
export async function createCourse(params : TcreateCourse){
    try {
        connectDataBase();
        const findCourse = await Course.findOne({slug : params.slug});
        if(findCourse){
            return {
                success : false,
                message : "Đường dẫn đã tồn tại"
            }
        }
        const course  = await Course.create(params);
        return {
            success : true,
            data : JSON.parse(JSON.stringify(course))
        };
    } catch (error) {
        
    }
}
export async function updateCourse(params : TUpdateCourse){
    try {
        connectDataBase();
        const findCourse = Course.findOne({slug :params.slug});
        if(!findCourse) return ;
        await Course.findOneAndUpdate({slug : params.slug} , params.updateData , {new : true});
        revalidatePath("/");
    } catch (error) {
        
    }
}