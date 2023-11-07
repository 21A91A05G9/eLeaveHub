import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../App.css'
import MainPage from './mainPage'
export default function () {
    const [formdata,setFormdata] = useState({
        'email':'',
        'pwd':''
    })
    const nav=useNavigate()

    const handleSTUsubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)1
        axios.post("http://localhost:5111/handle_student_login",formdata).then((res)=>{
        alert(res.data.msg)
        const id=(res.data.id)
        if(res.data.msg==='Success'){
            nav('/studentDashboard/'+id)
        }})
        .catch(err=>console.log(err))

    }
  return (
    <>
    <MainPage/>
    
    <div className='container-fluid logincon'>
    <div className='container login'>
    <div class="card text-bg-success mb-3">
    <div class="card-header" style={{color:'white'}}>Student Login</div>
    <div class="card-body">
        <h5 class="card-title"></h5>
        <div class="card-text">
        <form onSubmit={handleSTUsubmit}>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
            <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail3"  placeholder='Enter your email' value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
            <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword3"  placeholder='Enter your password' value={formdata.pwd}  onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})}/>
            </div>
        </div>
        <div className='text-center'><button type="submit" class="btn btn-success" >Login</button></div>
        
        </form>
        <div className='text-center'>Don't have an account? <Link to='/register'>Register</Link>/<Link to='/hodlogin'>Hod</Link></div>
         
        </div>
    </div>
    <div class="card-footer"></div>
    </div>
    </div>

    </div>
    </>
  )
}
