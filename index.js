import express from 'express';
import connectDB from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT;

connectDB(); // Connection to MongoDB

const app=express();

app.get('/',(req,res) =>{
    res.send('API is running...');
});

app.listen(port,()=> console.log(`Server running in port ${port}`));