import React from 'react'

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import MainPage from './mainPage'
function HODregister(){
    
    const [hoddata,sethoddata] = useState({
        'name':'',
        'email':'',
        'phnum':'',
        'branch':'',
        'clg':'',
        'pwd':''
    })
    const nav=useNavigate()
    
    
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
        <div className='container'>
        <div className='container login pt-5'>
        <div class="card text-bg-success mb-3">
        <div class="card-header">Hod Registration</div>
        <div class="card-body">
            <h5 class="card-title"></h5>
            <div class="card-text">
            <form  onSubmit={handleHODreg}>
            <div class="row mb-3">
                <label for="Name3" class="col-sm-4 col-form-label">Name</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="Name3" placeholder="Enter full name"   value={hoddata.name} onChange={(e)=>sethoddata({...hoddata,name:e.target.value})} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
                <div class="col-sm-8">
                <input type="email" class="form-control" id="inputEmail3"  value={hoddata.email}  onChange={(e)=>sethoddata({...hoddata,email:e.target.value})}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="phone3" class="col-sm-4 col-form-label">Phone No.</label>
                <div class="col-sm-8">
                <input type="number" class="form-control" id="phone3"  value={hoddata.phnum}  onChange={(e)=>sethoddata({...hoddata,phnum:e.target.value})}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="branch3" class="col-sm-4 col-form-label">Branch</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="branch3" placeholder="Enter your branch"   value={hoddata.branch}  onChange={(e)=>sethoddata({...hoddata,branch:e.target.value})} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="college3" class="col-sm-4 col-form-label">Branch</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="colege3" placeholder="Enter your college"   value={hoddata.clg} onChange={(e)=>sethoddata({...hoddata,clg:e.target.value})} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
                <div class="col-sm-8">
                <input type="password" class="form-control" id="inputPassword3" value={hoddata.pwd} onChange={(e)=>sethoddata({...hoddata,pwd:e.target.value})}/>
                </div>
            </div>
            <div className='text-center'><button  class="btn btn-success" >Register</button></div>
            
            </form>
            {/* <button  class="btn btn-success " >Register</button> <br/> */}
            
            <div className='text-center'>Already have an account? <Link to='/hodlogin'>Login</Link></div>
            
            </div>
        </div>
        <div class="card-footer"></div>
        </div>
        </div>

        </div>
       
        </>
    )
}
export default HODregister