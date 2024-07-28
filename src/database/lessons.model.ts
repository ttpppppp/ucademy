import { ElessonType } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface ILesson extends Document {
    _id: string;
    title: string;
    slug: string;
    lecture: Schema.Types.ObjectId;
    courses: Schema.Types.ObjectId;
    video_url: string;
    content: string;
    order: number;
    duration: number;
    type: ElessonType;
    created_at: Date;
    _destroy: boolean;
}

const lessionSchema = new Schema<ILesson>({
    title: { type: String },
    slug: { type: String },
    lecture: { type: Schema.Types.ObjectId, ref: 'Lecture' },
    courses: { type: Schema.Types.ObjectId, ref: 'Course' },
    video_url: { type: String },
    content: { type: String },
    order: { type: Number },
    duration: { type: Number },
    type: { 
        type: String,
        enum : Object.values(ElessonType),
        default : ElessonType.VIDEO
    },
    created_at: { type: Date, default: Date.now },
    _destroy: { type: Boolean, default: false }
});

const ILesson = models.ILesson || model<ILesson>("ILesson", lessionSchema);
export default ILesson;
