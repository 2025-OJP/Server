const express=require('express');
const app=express();
const cors = require('cors');

// Load environment variables
require('dotenv').config();

const port=process.env.BACKEND_PORT;

app.get('/',(req,res)=>{
    res.send('Hello Back!')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})