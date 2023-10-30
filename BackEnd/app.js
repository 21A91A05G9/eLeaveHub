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
//MYX1EAgyWx4uMfCK
mongoose.connect('mongodb+srv://SudheeshnaVijju:jBTw3xIoUPeROH6d@cluster0.lertnm8.mongodb.net/eLeaveHub?retryWrites=true&w=majority')
.then(() => app.listen(5111))
.then(() =>console.log("Connected to Database & Listining to localhost 5111"))
.catch((err) => console.log(err));

app.post('/formdata',async(req,res,next)=>{
    const {name, rollnum, email,reason}=req.body;
    const count='-1';
    const f=new form({
        name,
        rollnum,
        email,
        reason,
        count
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
          studentdetails.findOne({uremail: email}).then(user=>{
            if(user){
            var mailOptions = {
            from: 'sudheeshnavijjusudheeshnavijju@gmail.com',
            to: user.hodemail,
            subject: 'eLeaveHub Mail',
            // text:'hello...'
            text: "Dear Madam/Sir, \n\tI'm "+user.name+" from "+user.branch+" department having Roll Number "+user.rollnum.toUpperCase()+" in "+user.clg.toUpperCase()+" college. I'm sending this mail because I'm requesting you a leave and the reason is: "+reason+"."+
            "I'm hoping that you will accept the leave.\n\t\t\tThanking you\nAccept the Leave:LINK\nReject the Leave:LINK"
          }
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              return res.send({msg:"Email sent successfully to your hod"})

            }
          })}
          else return res.send({msg:"plz give valid information"})
        })
    }
    catch(err){
        console.log(err)
        return res.send({msg:"error in sending the mail"})

    }
    
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

app.post('/getdata',(req,res,next)=>{
  form.find({ count: '-1' }).then(user=>{
    res.send(user)
  })})

app.put('/set1/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const count = '1';

    const query = { _id: id };

    const updatedDoc = await form.findOneAndUpdate(query, { count });

    if (updatedDoc) {
      console.log("Document updated successfully");
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.error(error);
  }
});

app.put('/set0/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const count = '0';
    const query = { _id: id };

    const updatedDoc = await form.findOneAndUpdate(query, { count }); 
    if (updatedDoc) {
      res.send({ message: 'Document updated successfully' });
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.error(error);
  }
});