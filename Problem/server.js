const express=require('express');
const app=express();

// Load environment variables
require('dotenv').config();

const port=process.env.PROBLEM_PORT;

app.get('/',(req,res)=>{
    res.send('Hello problem!')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})