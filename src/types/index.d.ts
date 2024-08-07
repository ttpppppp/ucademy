import { ICourse } from './../database/course.model';
type TActiveLinkProps = {
    url : string
    children : React.ReactNode
}
type TMenuItem = {
    url : string;
    title : string;
    icon ?: React.ReactNode;
}
type TcreateUserParam = {
    clerkId : string
    username : string
    email : string
    avatar ?: string
    name ?: string
}
type TcreateCourse = {
    title : string,
    slug : string,
    image ?: string,
    price ?: number,
    sale_price ?: number,
    intro_url ?: string,
    description ?: string,
    view ?: number
}
type TUpdateCourse = {
    slug : string,
    updateData : Partial<ICourse>
}
export{ ActiveLinkProps , TMenuItem , TcreateUserParam , TcreateCourse , TUpdateCourse}; 