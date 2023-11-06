import React from 'react'
import './student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHomeUser,faUser} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
export default function sidebar(props) {
  return (
    <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 pt-1 menu'>
                <button class="btn btn-success " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <FontAwesomeIcon icon={faHomeUser} className="menuicon"/> </button>
                <div class="offcanvas offcanvas-start sidebar show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">
                
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                    <button type="button" className='btn  btn-success' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='row  mb-3'>
                        <div className='profileCircle'>
                            <FontAwesomeIcon icon={faUser} className="profileicon pt-3"/>
                             {/* <img src="image" alt="profile"/> */}
                        </div>
                    </div>
                    <Link className='row mt-4 pt-4' to={'/studentdashboard/'+props.id}>Home</Link>
                    <Link className='row ' to='/about'>About</Link>
                    <Link className='row ' to='/contact'>Contact</Link>
                    <Link className='row ' to='/sendemail'>Request</Link>
                    <Link className='row ' to='/student'>settings</Link>
                    <Link className='row ' to='/'>Logout</Link>
                </div>
                </div>
                </div>
  )
}
