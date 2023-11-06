import React from 'react'
// import './home.css'
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
    const nav=useNavigate()
    function handleSTUreg(e){
        e.preventDefault();
        // console.log(formdata)
        axios.post("http://localhost:5111/handle_student_reg",formdata).then((res)=>{
        alert(res.data.msg)
        if(res.data.msg=='submitted') nav('/studentDashboard')
    })
    }
    
    
    return(
        <>
        <MainPage/>
        <div className='container pt-5 mt-5'>
        <div className='container login'>
        <div class="card text-bg-success mb-3">
        
                <div class="card-header"><b>Student</b></div>
                <div class="card-body">
                <div class="container">
                <form  onSubmit={handleSTUreg}>
                <div class="row mb-3">
                    <label for="Name3" class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="Name3" placeholder="Enter full name"   value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})} />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="roll3" class="col-sm-4 col-form-label">Roll NO</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="roll3" placeholder="Enter Roll No"    value={formdata.rollnum} onChange={(e)=>setFormdata({...formdata,rollnum:e.target.value})}  />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                    <input type="email" class="form-control" id="inputEmail3"  placeholder="Enter your email" value={formdata.uremail}  onChange={(e)=>setFormdata({...formdata,uremail:e.target.value})}/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="phone3" class="col-sm-4 col-form-label">Phone No.</label>
                    <div class="col-sm-8">
                    <input type="number" class="form-control" id="phone3"  placeholder="Enter your phone number"  value={formdata.phnum} onChange={(e)=>setFormdata({...formdata,phnum:e.target.value})} />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="branch3" class="col-sm-4 col-form-label">Branch</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="branch3" placeholder="Enter your branch"   value={formdata.branch}  onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}  />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="college3" class="col-sm-4 col-form-label">College</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="colege3" placeholder="Enter your college"   value={formdata.clg}  onChange={(e)=>setFormdata({...formdata,clg:e.target.value})} />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="hodmail3" class="col-sm-4 col-form-label">HOD email</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="hodmail3" placeholder="Enter your HOD email"   value={formdata.hodemail} onChange={(e)=>setFormdata({...formdata,hodemail:e.target.value})}  />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
                    <div class="col-sm-8">
                    <input type="password" class="form-control" id="inputPassword3"  placeholder="Enter your password" value={formdata.pwd} onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})}/>
                    </div>
                </div>
                <div className='text-center'><button  class="btn btn-success" >Register</button></div>   
                <div className='text-center'>Already have an account? <Link to='/studentlogin'>Login</Link></div>

                </form>
                </div>
                </div>
            </div>  
            </div>

        </div>
      

        
        </>
    )
}
export default Register