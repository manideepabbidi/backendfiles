const express = require('express')
const routes=require("./routes/index");
const mongoose=require("mongoose")
const bodyparser=require("body-parser");
const port=4000
const app=express();
app.use(bodyparser.json());
mongoose.connect("mongodb+srv://user1:edureka@cluster0.ivxsu.mongodb.net/batch15?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}
).then(result=>
    { console.log("connected to mongodb");
    app.listen(port,()=>
    {
        console.log("server is running");
    })
    }).catch(error=>
        {
            console.log(error);

        })
        
app.use("/",routes);


