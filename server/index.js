const express=require('express')


const app=express()


app.get("/",(req,res)=>{
    console.log("Hello world")
})

app.listen(5000,()=>{
    console.log("Port is running 8000")
})