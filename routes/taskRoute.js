import express from 'express';
const router = express.Router();
import asyncHandler from './asyncHandler.js'
import Task from '../model/task.js';

router.get('/', asyncHandler(async (req,res)=>{
    const allTask= await Task.find({});
    res.json(allTask);
}));

export default router;