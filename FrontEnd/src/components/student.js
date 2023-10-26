import React from 'react'
import './student.css'
import Counter from './counter'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faCheckSquare ,faChartPie,faListUl} from '@fortawesome/free-solid-svg-icons'
import OptBoxes from './optBoxes'
import Calender from './calender'
export default function Student() {
   
  return (
    <>
        <div className='container-fluid'>
            <div className='row dash'>
                <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 pt-2 menu'>
                <button class="btn btn-success " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Menu </button>

                <div class="offcanvas offcanvas-start sidebar" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Name</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='row  mb-3'>
                        <div className='profileCircle'> {/* <img src="image" alt="profile"/> */}</div>
                    </div>
                    <Link className='row mt-4 pt-4' to='/student'>Home</Link>
                    <Link className='row ' to='/student'>Accet</Link>
                    <Link className='row ' to='/student'>Reject</Link>
                    <Link className='row ' to='/student'>Overall</Link>
                    <Link className='row ' to='/student'>settings</Link>
                    <Link className='row ' to='/student'>Logout</Link>
                </div>
                </div>
                </div>
              
                {/* <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 '>k</div> */}
                <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 box' >
                    <h1 className='pt-4 pb-1 mx-5'>Welcoma Back ...</h1>
                    <div className="row " >
                    <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4 col-xs-4 mx-3' >
                        <div className='row leaveCnt' > <Counter/> </div>
                    </div>    

                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12' >
                        <div className='row leaveCnt m-3 '> <Calender/> </div>
                    </div> 

                    <div className='row bottom'>
                        <div className='col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12'>
                            <div className='row boxesrow'>
                                <div className='col-md-4 boxes m-1' >
                                    <div className='row'><OptBoxes name="Accept" icon={faCheckSquare}/></div>
                                </div>
                                <div className=' col-md-4 boxes m-1'>
                                    <div className='row  '><OptBoxes name="Reject" icon={faCircleXmark}/></div>
                                </div>
                                <div className='col-md-4 boxes m-1'>
                                    <div className='row '><OptBoxes name="Ovarall" icon={faChartPie}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 col-sm-12 col-xs-12 row  '>
                                
                                <button className='btn btn-light req'><b>Request</b></button>
                           
                        </div>
                    </div>
                   
                    
                    {/* <div className='col-md-4 col-lg-4 col-xl-4 col-sm-2 col-xl-2' >kk</div> */}
                    
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
