import { EuserRole, EuserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId : string;
    name : string;
    username : string;
    email : string;
    avatar : string;
    status : EuserStatus
    role : EuserRole
    courses : Schema.Types.ObjectId[];
    created_at : Date
}

const userSchema  = new Schema<IUser>({
    clerkId : {
        type : String,
        required : true
    },
    name : {
        type : String
    }
    ,
    username : {
        type : String,
        unique : true,
        required : true
    }
    
    ,
    email : {
        type : String,
        unique : true,
        required : true
    }
    
    ,
    avatar : {
        type : String
    },
    courses:[
        {
            type : Schema.Types.ObjectId,
            ref : "Course"
        }
    ],
    created_at : {
        type : Date,
        default : Date.now
    },
    role : {
        type : String,
        enum : Object.values(EuserRole),
        default: EuserRole.USER
    },
    status : {
        type : String,
        enum : Object.values(EuserStatus),
        default: EuserStatus.ACTIVE
    }
})

const User = models.User || model("User" , userSchema);

export default User;