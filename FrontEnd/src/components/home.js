import React from 'react'
import './home.css'
export default function Home() {
  return (
    <>
        <div className='container-fluid row home'>
            {/* student/faculty login */}
           
            <div class="card text-center col-md-4 col-lg-3 col-xl-2 col-sm-12 col-xs-12 ">
                <div class="card-header">
                    <b>Student</b>
                </div>
                <div class="card-body">
                <div class="container mt-5 mb-4 ">
                <form action="/action_page.php ">
                        <div class="row mb-3">
                        <div class="col-4">
                            <label for="email"><b>Email</b></label>
                        </div>
                        <div class="col-6">
                            <input type="email" id="email" name="email" placeholder="Enter Email" size={15}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-4">
                            <label for="lname"><b>Password</b></label>
                        </div>
                        <div class="col-6">
                            <input type="password" id="password" name="password" placeholder="Enter Password" size={15}/>
                        </div>
                        </div>
                        
                        
                    </form>
                </div>
                    <button  class="btn btn-success mt-4">Login</button>
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
                    <form action="/action_page.php ">
                        <div class="row mb-3">
                        <div class="col-4">
                            <label for="email"><b>Email</b></label>
                        </div>
                        <div class="col-6">
                            <input type="email" id="email" name="email" placeholder="Enter Email" size={15}/>
                        </div>
                        </div>
                        <div class="row mb-4">
                        <div class="col-4">
                            <label for="lname"><b>Password</b></label>
                        </div>
                        <div class="col-6">
                            <input type="password" id="password" name="password" placeholder="Enter Password" size={15}/>
                        </div>
                        </div>
                        
                        
                    </form>
                </div>
                    <button href="#" class="btn btn-success  mt-4">Login</button>
                </div>
                <div class="card-footer ">
                    
                </div>
            </div>
        </div>
    </>
  )
}
