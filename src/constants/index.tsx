import {IconPlay , IconExplore, IconStudy, IconUser, IconComment, IconOrder} from "@/icons/index";
import { TMenuItem } from "@/types";

export const menuItem : TMenuItem[] = [
    {
        url : "/",
        title : "Khám phá",
        icon : <IconExplore className="size-5" />
    },
    {
        url : "/study",
        title : "Khu vực học tập",
        icon : <IconPlay className="size-5" />
    },
    {
        url : "/manage/course",
        title : "Quản lý khóa học",
        icon : <IconStudy className="size-5" />
    },
    {
        url : "/manage/member",
        title : "Quản lý thành viên",
        icon : <IconUser className="size-5" />
    },
    {
        url : "/manage/order",
        title : "Quản lý đơn hàng",
        icon : <IconOrder className="size-5" />
    },
    {
        url : "/manage/comment",
        title : "Quản lý bình luận",
        icon : <IconComment className="size-5" />
    },
]