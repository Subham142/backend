import express from 'express';
const router = express.Router();
import asyncHandler from './asyncHandler.js'
import Task from '../model/task.js';

//To fectch all the task
router.get('/', asyncHandler(async (req,res)=>{
    const allTask= await Task.find({});
    res.json(allTask);
}));


// to delete task
router.delete('/:id', asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.id)

    if (task) {
      await task.remove()
      res.json({ message: 'Task removed' })
    } else {
      res.status(404).json({message:'Task not found'});
      
    }
}));


//UPDATE task
router.put('/:id', asyncHandler(async (req,res)=>{
    const {
        title,
        completed,
        description,
        dueDate,
        priority,
        status,
        takenBy,
    } = req.body;
    
    const task = await Task.findById(req.params.id)

    if (task) {
      task.title=title
      task.completed=completed
      task.description=description
      task.dueDate =dueDate
      task.priority=priority
      task.status=status
      task.takenBy=takenBy

      const updatedTask= await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({message:'Task not found'});
      
    }
}));
export default router;