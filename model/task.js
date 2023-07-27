import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: String,
    completed:Boolean,
    description:String,
    dueDate:{ type: Date, default: Date.now },
    priority: Number,
    status: Number,
    takenBy: String,
},{
    timestamps:true,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;