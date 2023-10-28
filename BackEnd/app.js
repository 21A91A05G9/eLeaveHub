import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import form from "./models/form";
import nodemailer from 'nodemailer';
import studentdetails from "./models/studentdetails";
const app =express();
app.use(bodyparser.json())
app.use(cors())
//bqz0DwT22jAAojuS
mongoose.connect('mongodb+srv://SudheeshnaVijju:bqz0DwT22jAAojuS@cluster0.lertnm8.mongodb.net/eLeaveHub?retryWrites=true&w=majority')
.then(() => app.listen(5067))
.then(() =>console.log("Connected to Database & Listining to localhost 5067"))
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

app.post('/handle_student_reg',async(req,res,next)=>{
  const {name, rollnum, uremail,phnum,branch,clg,hodemail,pwd}=req.body;
  const f=new studentdetails({
      name,
      rollnum,
      uremail,
      phnum,
      branch,
      clg,
      hodemail,
      pwd
  })
  if(name=='' || rollnum=='' || uremail=='' || phnum=='' || branch=='' || clg=='' || hodemail=='' || pwd==''){
    return res.send({msg:"Enter valid details"})
  }
  studentdetails.findOne({uremail: uremail})
  .then(user=>{
    if(user){
      return res.send({msg:"Already exists"})
    }
    else{
      try{
        f.save()
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"submitted"})
    }
  })
  
})


app.post('/handle_student_login',(req,res)=>{
  const {email,pwd}=req.body;
  studentdetails.findOne({uremail: email})
  .then(user=>{
    if(user){
      if(user.pwd===pwd){
        res.json('Success')
      }
      else{
        res.json('thepassword is incorrect')
      }
    }
    else{
      res.json("no registered")
    }
  })
})