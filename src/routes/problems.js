
const express=require('express');
const router=express.Router();
const createResponse=require('../utils/responseTemplate');
const createListResponse=require('../utils/responseListTemplate');

router.get('/',async(req,res)=>{
    const probelmID=req.query.probelmID;

    try{
        //find problem by problemID from DB
        
    }catch(error){
        console.error('');
        res.status(500).json
    }

})

module.exports=router;