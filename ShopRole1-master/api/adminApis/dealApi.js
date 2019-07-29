dealRoutes=require('express').Router();
const uploadDeal = require('../../utils/multerDeal');
const dealObject=require('../../models/admin/dealoftheday/dealofthedaymodel');
const dealOperations =require('../../db/helpers/admin/dealoftheday/dealOperations');

dealRoutes.post('/removeDealPermanent',(req,res)=> {
    let dealId=req.body.dealId;
    dealOperations.deleteDeal(dealId,res);
  console.log("inside deal api");
});
dealRoutes.get('/getAllDeals',(req,res)=> {
    dealOperations.getAllDeals(res);
});
dealRoutes.post('/addDeal',(req,res)=> {
    console.log(req.body);
    uploadDeal(req,res,(err)=>{
        if(err){
            res.status(500).json({status:config.ERROR,message:"Error uploading file try again"});
            console.log("error in api",err);

        }
       if(req.file) {
           console.log("req.file is",req.file);
           console.log("req.body",req.body);
        let newFilePath="http://127.0.0.1:5501/ShopRole1-master/" + req.file.path;
           console.log(newFilePath);
           let newFileObject= new dealObject(req.body.priority,newFilePath);
            dealOperations.addDeal(newFileObject,res);
       }
       else{
           console.log("file nahi mili");
               }
      
    
    })

});
dealRoutes.post('/updateDeal',(req,res)=> {
    console.log("______",req.body);
    let priority=req.body.priority;
    let expired=req.body.expired;
    let dealId=req.body.dealId;
    dealOperations.updateDeal(dealId,priority,expired,res);
})
module.exports=dealRoutes;