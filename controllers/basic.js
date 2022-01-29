const user=require("../models/basic");
exports.login=(req,res)=>
{
    user.find({
        email:req.body.email,
        password:req.body.password
    }).then(result=>
        {if(result.length>0)
            {
            res.status(200).json({
                message:"user logged in succesfully",
                user:result,
                isLoggedin:true
            })
            }
            else {
                res.status(400).json({
                    message:"email or password is wrong",
                    isLoggedin:false
                });
                 
            }
            }).catch(error =>
                {
                    res.status(500).json({
                        message:"error in database",
                        error:error
                    })
                })
        
}