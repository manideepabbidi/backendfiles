const express=require("express")
router=express.Router();
control=require("../controllers/User");
router.get('/login',control.login);
router.post('/Signup',control.signup);
module.exports=router;