const express=require("express");

const router=express.Router();
const adminUsername='admin'
const adminPassword='admin'


// For admin login
router.post("/adminLogin", (req,res)=>{
    try{
        const {username,password}=req.body
        if (username===adminUsername || password===adminPassword) {
        res.send("Admin is here")
        }
        else{
            res.send('username or password is incorrect');
        }
    }catch(err){
        console.log(err);
        res.send(err.message);
    }
})
module.exports=router