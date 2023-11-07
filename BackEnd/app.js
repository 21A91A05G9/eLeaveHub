import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import form from "./models/form";
import nodemailer from 'nodemailer';
import studentdetails from "./models/studentdetails";
import hoddetails from "./models/hoddetails";
import e from "express";

const app =express();
app.use(bodyparser.json())
app.use(cors())
//jBTw3xIoUPeROH6d
mongoose.connect('mongodb+srv://SudheeshnaVijju:jBTw3xIoUPeROH6d@cluster0.lertnm8.mongodb.net/eLeaveHub?retryWrites=true&w=majority')
.then(() => app.listen(5111))
.then(() =>console.log("Connected to Database & Listining to localhost 5111"))
.catch((err) => console.log(err));

app.post('/formdata',async(req,res,next)=>{
    const {name, rollnum, email,reason}=req.body;
    // name.toUpperCase()
    console.log(name)
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
            text: "Dear Madam/Sir, \n\tI'm "+user.name.toUpperCase()+" from "+user.branch.toUpperCase()+" department having Roll Number "+user.rollnum.toUpperCase()+" in "+user.clg.toUpperCase()+" college. I'm sending this mail because I'm requesting you a leave and the reason is: "+reason+"."+
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

app.post('/handle_hod_reg',async(req,res,next)=>{
  const {name, email,phnum,branch,clg,pwd}=req.body;
  const f=new hoddetails({
      name,
      email,
      phnum,
      branch,
      clg,
      pwd
  })
  if(name=='' ||email=='' || phnum=='' || branch=='' || clg=='' || pwd==''){
    return res.send({msg:"Enter valid details"})
  }
  hoddetails.findOne({email: email})
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
        res.send({msg:'Success',id:user._id})
      }
      else{
        res.json({msg:'thepassword is incorrect'})
      }
    }
    else{
      res.json({msg:"no registered"})
    }
  })
})

app.post('/findstudent/:id',(req,res,next)=>{
  const _id=req.params.id
  // console.log(_id)
  studentdetails.findOne({"_id": _id})
  .then(user=>{
    res.send(user)
    // console.log(user)
  })
})
app.post('/findhod/:id',(req,res,next)=>{
  const _id=req.params.id
  // console.log(_id)
  hoddetails.findOne({"_id": _id})
  .then(user=>{
    res.send(user)
    // console.log(user)
  })
})

app.post('/countupdate1/:id',async (req, res, next) => {
  const _id=req.params.id
  try{
    studentdetails.findOne({_id:_id}).then(user=>
      {
      form.find({email:user.uremail,count:1}).then((result)=>{
        // console.log(result.length)
        res.json(result.length)
      })
    })
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})

app.post('/countupdate0/:id',async (req, res, next) => {
  const _id=req.params.id
  try{
    studentdetails.findOne({_id:_id}).then(user=>
      {
      form.find({email:user.uremail,count:0}).then((result)=>{
        // console.log(result.length)
        res.json(result.length)
      })
    })
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})

app.post('/countupdate-1/:id',async (req, res, next) => {
  const _id=req.params.id
  try{
    studentdetails.findOne({_id:_id}).then(user=>
      {
      form.find({email:user.uremail,count:-1}).then((result)=>{
        // console.log(result.length)
        res.json(result.length)
      })
    })
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})

app.post('/showdata/:id',async(req,res,next)=>{
  const id=req.params.id;
  studentdetails.findOne({_id:id}).then(stu=>{
    form.find({email:stu.uremail}).then(data=>
      res.send(data))
  })
})
async function counter1(stulist) {
  if (stulist) {
    let c = 0;
    await Promise.all(
      stulist.map(async (ele) => {
        const result = await form.find({ email: ele.uremail, count: 1 });
        c += result.length;
      })
    );
    //console.log(c);
    return c;
  }
}

app.post('/acceptcounter/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const hod = await hoddetails.findOne({ _id: _id });
    const stulist = await studentdetails.find({ hodemail: hod.email });

    if (stulist) {
      const c = await counter1(stulist);
      res.json(c);
      //console.log(c);
    } else {
      res.json(0);
    }
  } catch (error) {
    // Handle any potential errors here.
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

async function counter0(stulist) {
  if (stulist) {
    let c = 0;
    await Promise.all(
      stulist.map(async (ele) => {
        const result = await form.find({ email: ele.uremail, count: 0 });
        c += result.length;
      })
    );
    //console.log(c);
    return c;
  }
}

app.post('/rejectcounter/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const hod = await hoddetails.findOne({ _id: _id });
    const stulist = await studentdetails.find({ hodemail: hod.email });

    if (stulist) {
      const c = await counter0(stulist);
      res.json(c);
      //console.log(c);
    } else {
      res.json(0);
    }
  } catch (error) {
    // Handle any potential errors here.
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

async function counterp(stulist) {
  if (stulist) {
    let c = 0;
    await Promise.all(
      stulist.map(async (ele) => {
        const result = await form.find({ email: ele.uremail, count: '-1' });
        c += result.length;
      })
    );
    //console.log(c);
    return c;
  }
}

app.post('/pendingcounter/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const hod = await hoddetails.findOne({ _id: _id });
    const stulist = await studentdetails.find({ hodemail: hod.email });

    if (stulist) {
      const c = await counterp(stulist);
      res.json(c);
      //console.log(c);
    } else {
      console.log('el')
      res.json(0);
    }
  } catch (error) {
    // Handle any potential errors here.
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
  
// app.post('/countupdate/:id', async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const user = await form.findOne({_id:id});

//     if (!user) {
//       // console.log('err')
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const result = await form.find({ email: user.email, count: 1 });

//     res.json(result.length);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while counting documents' });
//   }
// });


app.post('/handle_hod_login',(req,res)=>{
  const {email,pwd}=req.body;
  hoddetails.findOne({email: email})
  .then(user=>{
    if(user){
      if(user.pwd===pwd){
        res.json({msg:'Success',id:user._id})
      }
      else{
        res.json({msg:'thepassword is incorrect'})
      }
    }
    else{
      res.json({msg:"no registered"})
    }
  })
})

var c = [];
app.post("/getdata/:id", async (req, res) => {
  const id = req.params.id;
  const c = [];
  try {
    const hod = await hoddetails.findOne({ _id: id });

    if (!hod) {
      res.status(404).json({ error: "HOD not found" });
      return;
    }

    const list = await studentdetails.find({ hodemail: hod.email });

    const userPromises = list.map(async (ele) => {
      const users = await form.find({ email: ele.uremail, count: "-1" });
      c.push(users);
    });

    // Wait for all userPromises to resolve using Promise.all
    await Promise.all(userPromises);

    // Flatten the 'c' array using Array.prototype.concat and the spread operator
    const flattenedC = [].concat(...c);
    flattenedC.sort((a, b) => {
      if (a.reason < b.reason) return -1;
      if (a.reason > b.reason) return 1;
      return 0;
    });
    // Now, 'flattenedC' contains a flat array of user data
    //console.log(flattenedC);
    res.send(flattenedC);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});




// app.post("/getdata/:id",async(req,res,next)=>{
//   const id = req.params.id;
//   const c=[]
//   hoddetails.findOne({_id:id}).then(hod=>{
    
//     studentdetails.find({hodemail:hod.email}).then(list=>{
//       list.map(ele=>{
//         form.find({email:ele.uremail},{count:"-1"}).then(user=>{
//           c.push(user)
//           console.log(user)
//         })
//       })
//     })
//   })
//   res.send(c)
// })
// const lookup = new Map();
// arrayB.forEach((item) => {
//   lookup.set(item.id, item);
// });

// Filter arrayA based on matching ids in arrayB
// const result = arrayA.filter((itemA) => lookup.has(itemA.id));


// app.post('/getdata/:id', async (req, res) => {
//   const id = req.params.id;

//   try {
//     const hod = await hoddetails.findOne({ _id: id });

//     if (!hod) {
//       res.status(404).json({ error: 'HOD not found' });
//       return;
//     }

//     const stulist = await studentdetails.find({ hodemail: hod.email });

//     if (stulist && stulist.length > 0) {
//       const c = [];
//       await Promise.all(
//         stulist.map(async (ele) => {
//           const user = await form.find({ email: ele.uremail, count: '-1' });
//           if (user.length !== 0) {
//             c.push(user);
//           }
//         })
//       );

//       if (c.length > 0) {
//         res.json(c);
//       } else {
//         console.log('No matching user data found');
//         res.json([]);
//       }
//     } else {
//       console.log('No matching students found');
//       res.json([]);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

app.put('/set1/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const count = '1';
    const query = { _id: id };
    form.findOne(query).then((user)=>{
      try{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'sudheeshnavijjusudheeshnavijju@gmail.com',
              pass: 'rbux xjcb yltf rckk'
            }
          });
          
          var mailOptions = {
            from: 'sudheeshnavijjusudheeshnavijju@gmail.com',
            to: user.email,
            subject: 'eLeaveHub Mail',
            text: 'Dear '+user.name.toUpperCase()+';\n\tYour request for the the leave due to the reason: '+user.reason+' is "ACCEPTED" by your HOD\n\t\t Have a Nice Day..'
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
    })
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

app.put('/set0/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const count = '0';
    const query = { _id: id };

    form.findOne(query).then((user)=>{
      try{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'sudheeshnavijjusudheeshnavijju@gmail.com',
              pass: 'rbux xjcb yltf rckk'
            }
          });
          
          var mailOptions = {
            from: 'sudheeshnavijjusudheeshnavijju@gmail.com',
            to: user.email,
            subject: 'eLeaveHub Mail',
            text: 'Dear '+user.name.toUpperCase()+';\n\tYour request for the the leave due to the reason: '+user.reason+' is "REJECTED" by your HOD\n\t\t Sorry to hear that..'
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
  })

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

app.post('/acceptcounter',async (req, res, next) => {
  try{
  form.find({count:1}).then(result=> {    
    res.json(result.length)
  })}
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})

app.post('/rejectcounter',async (req, res, next) => {
  try{
  form.find({count:0}).then(result=> {    
    res.json(result.length)
  })}
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})

app.post('/pendingcounter',async (req, res, next) => {
  try{
  form.find({count:-1}).then(result=> {    
    res.json(result.length)
  })}
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'An error occurred while counting documents' });  
  }

})