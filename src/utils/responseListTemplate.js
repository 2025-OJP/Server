
function createListResponse(success,message,data=[]){
    return{
        success,
        message,
        data
    };
}

module.exports=createListResponse