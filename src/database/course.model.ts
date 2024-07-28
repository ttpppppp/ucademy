import { EcourseLevel, EcourseStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface ICourse extends Document {
    _id: string;
    title: string;
    image: string;
    intro_url: string;
    description: string;
    price: number;
    sale_price: number;
    slug: string;
    status: EcourseStatus;
    created_at: Date;
    author: Schema.Types.ObjectId;
    level: EcourseLevel;
    view: number;
    quantity : number;
    rating: number[];
    info: {
        requirements: string[];
        benefits: string[];
        qa: {
            question: string;
            answer: string;
        }[];
    };
    lectures: Schema.Types.ObjectId[];
    _destroy: boolean;
}

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    intro_url: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    sale_price: {
        type: Number,
    },
    status: {
        type: String,
        enum: Object.values(EcourseStatus),
        default: EcourseStatus.PENDING
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    level: {
        type: String,
        enum: Object.values(EcourseLevel),
        default: EcourseLevel.BEGINNER
    },
    view: {
        type: Number,
        default: 0
    },
    lectures: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
    rating: {
        type: [Number],
        default: [5]
    },
    info: {
        requirements: {
            type: [String]
        },
        benefits: {
            type: [String]
        },
        qa: [
            {
                question: {
                    type: String
                },
                answer: {
                    type: String
                }
            }
        ]
    },
    slug : {
        type : String
    },
    _destroy: {
        type: Boolean,
        default: false
    },
    quantity :{
        type : Number,
        default : 1
    }
});

const Course = models.Course || model("Course", courseSchema);
export default Course;
