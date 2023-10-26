import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import form from "./models/form";
import nodemailer from 'nodemailer'
const app =express();
app.use(bodyparser.json())
app.use(cors())
//bqz0DwT22jAAojuS
mongoose.connect('mongodb+srv://SudheeshnaVijju:bqz0DwT22jAAojuS@cluster0.lertnm8.mongodb.net/eLeaveHub?retryWrites=true&w=majority')
.then(() => app.listen(5065))
.then(() =>console.log("Connected to Database & Listining to localhost 5056"))
.catch((err) => console.log(err));

app.post('/formdata',async(req,res,next)=>{
    const {name, rollnum, email,phnum,branch,college,reason}=req.body;
    const f=new form({
        name,
        rollnum,
        email,
        phnum,
        branch,
        college,
        reason
    })
    
    try{
        f.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'sudheeshnavijjusudheeshnavijju@gmail.com',
              pass: 'rbux xjcb yltf rckk'
            }
          });
          
          var mailOptions = {
            from: 'sudheeshnavijjusudheeshnavijju@gmail.com',
            to: email,
            subject: 'eLeaveHub Mail',
            text: "Dear Madam/Sir, \n\tI'm "+name+" from "+branch+" department having Roll Number "+rollnum.toUpperCase()+" in "+college.toUpperCase()+" college. I'm sending this mail because I'm requesting you a leave and the reason is: "+reason+"."+
            "I'm hoping that you will accept the leave.\n\t\t\tThanking you\nAccept the Leave:LINK\nReject the Leave:LINK"
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"submitted"})
})

// app.post('/handle_student_login',async(req,res,next)=>{
//   const {email,pwd}=req.body;
//   try{
//     result=await form.find({email})
//     t=JSON.stringify(result).length
//     console.log(t)
//   }
//   catch(err){
//     console.log(err)
//   }
//   if(!result){
//     return res.status(404).json({message:'No stdents found'})
//   }
//   // form.find({"email":email},(function(err, results) {
//   //   if(results){
//   //     return res.send({msg:email})
//   //   }
//   // }))
//   // if((form.find({"email":email})).length){
//   //   console.log((await form.find({"email":email}).length))
//   //   return res.send({msg:email})

//   // }
//   return res.status(200).json({message:'stdents found'})
//   // try{
//   //     f.save()
//   // }
//   // catch(err){
//   //     console.log(err)
//   // }
//   // return res.send({msg:"submitted"})
// })