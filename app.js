
const express=require('express');
const app=express();
const port=8082;
const cors=require('cors');

//Middleware to parse JSON data
app.use(express.json());
//To resolve acess problem
app.use(cors());


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

