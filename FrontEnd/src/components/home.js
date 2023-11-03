import React from 'react'
import './home.css'
import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Main from './main'
import MainPage from './mainPage'
export default function Home() {
    const [formdata,setFormdata] = useState({
        'email':'',
        'pwd':''
    })
    const nav=useNavigate()

    const handleSTUsubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)1
        axios.post("http://localhost:5111/handle_student_login",formdata).then((res)=>{
        alert(res.data)
        if(res.data==='Success'){
            nav('/studentDashboard')
        }})
        .catch(err=>console.log(err))

    }
    const [hoddata,sethoddata] = useState({
        'email':'',
        'pwd':''
    })

    const handleHODsubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)1
        axios.post("http://localhost:5111/handle_hod_login",hoddata).then((res)=>{
        alert(res.data)
        if(res.data==='Success'){
            nav('/hod')
        }})
        .catch(err=>console.log(err))

    }
  return (
    <>
        <MainPage/>
        <div className='container-fluid row home'>
            {/* student/faculty login */}
            <div class="card text-center col-md-4 col-lg-3 col-xl-2 col-sm-12 col-xs-12 ">
                <div class="card-header">
                    <b>Student</b>
                </div>
                <div class="card-body">
                <div class="container mt-5 mb-4">
                <form action="/action_page.php " onSubmit={handleSTUsubmit}>
                        <div class="row mb-3">
                        <div class="col-4">
                            <label for="email"><b>Email:</b></label>
                        </div>
                        <div class="col-6">
                        <input type="email" name="email" placeholder="Enter Email"  id="email" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})} size={13}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-4">
                            <label for="lname"><b>Password:</b></label>
                        </div>
                        <div class="col-6">
                        <input type="password" name="pwd" placeholder="Enter password"  id="password" value={formdata.pwd} size={13} onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})} />

                        </div>
                        </div>
                        <button  class="btn btn-success" >Login</button>
                        <p>Don't have a account? <Link to='/register'>Register</Link></p>
                        
                             
                </form>
                </div>
                </div>
                <div class="card-footer ">
                    
                </div>
            </div>
            {/* hod login */}
            <div class="card text-center col-md-4 col-lg-3 col-xl-2 col-sm-12 col-xs-12 m-3">
                <div class="card-header">
                   <b>HOD</b>
                </div>
                <div class="card-body">
                <div class="container mt-5 mb-4">
                    <form action="/action_page.php " onSubmit={handleHODsubmit} >
                        <div class="row mb-3">
                        <div class="col-4">
                            <label for="email"><b>Email:</b></label>
                        </div>
                        <div class="col-6">
                        <input type="email" name="email" placeholder="Enter Email"  id="email"  value={hoddata.email} onChange={(e)=>sethoddata({...hoddata,email:e.target.value})} size={13}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-4">
                            <label for="lname"><b>Password:</b></label>
                        </div>
                        <div class="col-6">
                        <input type="password" name="pwd" placeholder="Enter password"  id="password" value={hoddata.pwd} onChange={(e)=>sethoddata({...hoddata,pwd:e.target.value})} size={13}  />
                        </div>
                        </div>
                        <button  class="btn btn-success" >Login</button>
                        <p>Don't have a account? <Link to='/register'>Register</Link></p>
                    </form>
                </div>
                </div>
                <div class="card-footer ">
                    
                </div>
            </div>
        </div>
    </>
  )
}