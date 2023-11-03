import React from 'react'
import './student.css'
import Counter from './counter'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHomeUser,faHandPointLeft,faCircleXmark,faCheckSquare ,faChartPie,facl,faListUl,faPaperPlane,faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons'
import OptBoxes from './optBoxes'
import Calender from './calender'
import Button from './button';
export default function Student() {
   
  return (
    <>
        <div className='container-fluid'>
            <div className='row dash'>
                <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 pt-1 menu'>
                <button class="btn btn-success " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <FontAwesomeIcon icon={faHomeUser} className="menuicon"/> </button>
                <div class="offcanvas offcanvas-start sidebar show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">
                
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                    <button type="button" className='btn  btn-success' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='row  mb-3'>
                        <div className='profileCircle'> {/* <img src="image" alt="profile"/> */}</div>
                    </div>
                    <Link className='row mt-4 pt-4' to='/student'>Home</Link>
                    <Link className='row ' to='/student'>Accet</Link>
                    <Link className='row ' to='/student'>Reject</Link>
                    <Link className='row ' to='/student'>Pending</Link>
                    <Link className='row ' to='/student'>settings</Link>
                    <Link className='row ' to='/'>Logout</Link>
                </div>
                </div>
                </div>
              
                {/* <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 '>k</div> */}
                <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 box' >
                    <h1 className='pt-4 pb-1 mx-5 wel'>Welcomen Back ...</h1>
                    <div className="row " >
                    <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4 col-xs-4 mx-3' >
                        <div className='row leaveCnt' > <Counter purpose="Leaves Taken" cnt="15"/> </div>
                    </div>    

                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12' >
                        <div className='row leaveCnt m-3 '> <Calender/> </div>
                    </div> 
                    {/* <div className='mainbox col-md-5 p-4 rounded'>
                        <Link to='/requestleave'><button className="btnReq p-2"><FontAwesomeIcon  icon={faPaperPlane} />&nbsp;Request</button></Link>
                        <div className='row pt-4'>
                            <b className='col-3'>Accepted {}</b>
                            <b className='col-3'>Rejected {}</b>
                            <b className='col-3'>Pending {}</b>
                        </div>
                    </div> */}
                    <div className='row bottom pt-5'>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 row  '>
                                
                                <div className='req'><b> 
                                {/* <FontAwesomeIcon icon={faEnvelopesBulk} className="reqicon pt-4"/> */}
                                
                                
                                    <Link  to='/requestleave'><button className=" btn-success reqbtn row">
                                    <b className='col mainbtn'>Request</b></button></Link></b>
                                    {/* <div class="spinner-grow text-success col" role="status" >
                                    <span className="visually-hidden ">Loading... </span>
                                    </div> */}
                                    
                                   
                                    
                                </div>
                           
                        </div>
                        
                        <div className='col-md-9 col-lg-8 col-xl-8 col-sm-12 col-xs-12 boxmain'>
                            <div className='row boxesrow'>
                                <div className='col-md-4 boxes m-1' >
                                    <div className='row'><OptBoxes name="Accepted" cnt={10} icon={faCheckSquare}/></div>
                                </div>
                                <div className=' col-md-4 boxes m-1'>
                                    <div className='row  '><OptBoxes name="Rejected" cnt={10} icon={faCircleXmark}/></div>
                                </div>
                                <div className='col-md-4 boxes m-1'>
                                    <div className='row '><OptBoxes name="Pending" cnt={10} icon={faChartPie}/></div>
                                </div>
                            </div>
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
