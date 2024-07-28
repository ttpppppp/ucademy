import { Document, model, models, Schema } from "mongoose";

export interface ILecture extends Document {
    _id: string;
    title: string;
    created_at: Date;
    lessons: Schema.Types.ObjectId[];
    courses: Schema.Types.ObjectId;
}

const lectureSchema = new Schema<ILecture>({
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    lessons: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lesson"
        }
    ],
    courses: {
        type: Schema.Types.ObjectId,
        ref: "Courses",
        required: true
    }
});

const Lecture = models.lectureSchema || model("Lecture", lectureSchema);
export default Lecture;
