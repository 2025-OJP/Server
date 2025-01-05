
const express=require('express');
const router=express.Router();
const createResponse=require('../utils/responseTemplate');

router.post('/',async(req,res)=>{
    try{
        //Extract user info from the route parameter
        const{}=req.body;
        console.log("Login! log"); // For debugging
    }catch(error){

    }
});

module.exports=router;