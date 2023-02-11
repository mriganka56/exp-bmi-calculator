const express=require("express");
const bodyParser=require("body-parser");
const port= 3000 

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.post("/bmicalculator",(req,res)=>{
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var c=weight/(height*height);
    res.send("Your BMI is: "+c);
})

app.listen(port,()=>{
    console.log(`Server is Running on ${port}`)
})