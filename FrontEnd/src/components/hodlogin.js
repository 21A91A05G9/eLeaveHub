import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../App.css'
import MainPage from './mainPage'
import Hodpopup from './hodpopup'

export default function () {
    const nav=useNavigate()

    const [hoddata,sethoddata] = useState({
        'email':'',
        'pwd':''
    })

    const handleHODsubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)1
        axios.post("http://localhost:5111/handle_hod_login",hoddata).then((res)=>{
        alert(res.data.msg)
        const id=(res.data.id)
        if(res.data.msg==='Success'){
            nav('/hod/'+id)
        }})
        .catch(err=>console.log(err))

    }
  return (
    <div className="logincon">
    <MainPage/>
    
    <div className='container'  >
    <div className='container login'>
    <div class="card text-bg-success mb-3">
    <div class="card-header" style={{color:'white'}}>Hod Login</div>
    <div class="card-body">
        <h5 class="card-title"></h5>
        <div class="card-text">
        <form  onSubmit={handleHODsubmit}>
        <div class="row mb-3">
            <label for="inputEmail2" class="col-sm-4 col-form-label">Email</label>
            <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail22"  placeholder='Enter your email' value={hoddata.email} onChange={(e)=>sethoddata({...hoddata,email:e.target.value})}/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword2" class="col-sm-4 col-form-label">Password</label>
            <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword2"  placeholder='Enter your password' value={hoddata.pwd} onChange={(e)=>sethoddata({...hoddata,pwd:e.target.value})}/>
            </div>
        </div>
        <div className='text-center'><button type="submit" class="btn btn-success" >Login</button></div>
        
        </form>
        <div className='text-center'>Don't have an account? <Link to='/HODregister'>Register</Link> /<Link to='/studentlogin'>Student</Link></div>
         
        </div>



        
    </div>
    <div class="card-footer"></div>
    </div>
    </div>

    </div>
    </div>
  )
}
