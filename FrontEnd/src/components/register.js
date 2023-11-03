import React from 'react'
import './home.css'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import MainPage from './mainPage'
function Register(){
    const [formdata,setFormdata] = useState({
        'name':'',
        'rollnum':'',
        'uremail':'',
        'phnum':'',
        'branch':'',
        'clg':'',
        'hodemail':'',
        'pwd':''
    })
    const [hoddata,sethoddata] = useState({
        'name':'',
        'email':'',
        'phnum':'',
        'branch':'',
        'clg':'',
        'pwd':''
    })
    const nav=useNavigate()
    function handleSTUreg(e){
        e.preventDefault();
        // console.log(formdata)
        axios.post("http://localhost:5111/handle_student_reg",formdata).then((res)=>{
        alert(res.data.msg)
        if(res.data.msg=='submitted') nav('/studentDashboard')
    })
    }
    function handleHODreg(e){
        e.preventDefault();
        // console.log(formdata)
        axios.post("http://localhost:5111/handle_hod_reg",hoddata).then((res)=>{
        alert(res.data.msg)
        if(res.data.msg=='submitted') nav('/hod')
    })
    }
    
    return(
        <>
        <MainPage/>
        <div className='regForm mx-3' >
        <div class="card  col-md-4 col-lg-3 col-xl-2 col-sm-12 col-xs-12 ">
                <div class="card-header">
                    <b>Student</b>
                </div>
                <div class="card-body">
                <div class="container">
                <form action="/action_page.php " onSubmit={handleSTUreg}>
                        <div class="row mb-3">
                        <div class="col-6">
                            <label for="name"><b>Name</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="name" placeholder="Enter full name"  id="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})} size={13}/>
                        </div>
                        </div>
                        <div class="row mb-3">
                        <div class="col-6">
                            <label for="name"><b>RollNumber</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="rollnum" placeholder="Enter roll number"  id="name" value={formdata.rollnum} onChange={(e)=>setFormdata({...formdata,rollnum:e.target.value})} size={13}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="uremail"><b>Your Email</b></label>
                        </div>
                        <div class="col-6">
                        <input type="email" name="uremail" placeholder="Enter your email"  id="password" value={formdata.uremail} size={13} onChange={(e)=>setFormdata({...formdata,uremail:e.target.value})} />

                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="phnum"><b>Phone Number</b></label>
                        </div>
                        <div class="col-6">
                        <input type="tel" name="phnum" placeholder="Enter 10 digit number"  id="password" value={formdata.phnum} size={13} onChange={(e)=>setFormdata({...formdata,phnum:e.target.value})} />
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>Branch</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="branch" placeholder="Enter branch(cse/ece..)"  id="password" value={formdata.branch} size={13} onChange={(e)=>setFormdata({...formdata,branch:e.target.value})} />

                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>College</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="clg" placeholder="Enter clg(aec/acoe/acet)"  id="password" value={formdata.clg} size={13} onChange={(e)=>setFormdata({...formdata,clg:e.target.value})} />

                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>HOD Email</b></label>
                        </div>
                        <div class="col-6">
                        <input type="email" name="hodemail" placeholder="Enter your hod email"  id="password" value={formdata.hodemail} size={13} onChange={(e)=>setFormdata({...formdata,hodemail:e.target.value})} />

                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>Password</b></label>
                        </div>
                        <div class="col-6">
                        <input type="password" name="pwd" placeholder="create a password"  id="password" value={formdata.pwd} size={13} onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})} />

                        </div>
                        </div>
                        <div className='regFooter'>
                            <button  class="btn btn-success " >Register</button> <br/>
                            Already have a account? <Link to='/home'>Login</Link>
                        </div>
                      
         
                </form>
                </div>
                </div>
                {/* <div class="card-footer ">
                    
                </div> */}
        </div>
        </div>

        <div className='regForm mx-3' >
        <div class="card  col-md-4 col-lg-3 col-xl-2 col-sm-12 col-xs-12 ">
                <div class="card-header">
                    <b>HOD</b>
                </div>
                <div class="card-body">
                <div class="container">
                <form action="/action_page.php " onSubmit={handleHODreg}>
                        <div class="row mb-3">
                        <div class="col-6">
                            <label for="name"><b>Name</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="name" placeholder="Enter full name"  id="name" value={hoddata.name} onChange={(e)=>sethoddata({...hoddata,name:e.target.value})} size={13}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="email"><b>Your Email</b></label>
                        </div>
                        <div class="col-6">
                        <input type="email" name="email" placeholder="Enter your email"  id="password" value={hoddata.email} size={13} onChange={(e)=>sethoddata({...hoddata,email:e.target.value})} />
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="phnum"><b>Phone Number</b></label>
                        </div>
                        <div class="col-6">
                        <input type="tel" name="phnum" placeholder="Enter 10 digit number"  id="password" value={hoddata.phnum} size={13} onChange={(e)=>sethoddata({...hoddata,phnum:e.target.value})} />
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>Branch</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="branch" placeholder="Enter branch(cse/ece..)"  id="password" value={hoddata.branch} size={13} onChange={(e)=>sethoddata({...hoddata,branch:e.target.value})} />

                        </div>
                        </div>hod
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>College</b></label>
                        </div>
                        <div class="col-6">
                        <input type="text" name="clg" placeholder="Enter clg(aec/acoe/acet)"  id="password" value={hoddata.clg} size={13} onChange={(e)=>sethoddata({...hoddata,clg:e.target.value})} />

                        </div>
                        </div>
                        
                        <div class="row mb-4">
                        <div class="col-6">
                            <label for="lname"><b>Password</b></label>
                        </div>
                        <div class="col-6">
                        <input type="password" name="pwd" placeholder="create a password"  id="password" value={hoddata.pwd} size={13} onChange={(e)=>sethoddata({...hoddata,pwd:e.target.value})} />

                        </div>
                        </div>
                        <div className='regFooter'>
                            <button  class="btn btn-success " >Register</button> <br/>
                            Already have a account? <Link to='/home'>Login</Link>
                        </div>
                      
         
                </form>
                </div>
                </div>
                {/* <div class="card-footer ">
                    
                </div> */}
        </div>
        </div>
        </>
    )
}
export default Register