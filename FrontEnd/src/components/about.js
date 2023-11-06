import React from "react";
import './about.css'
import {Link} from 'react-router-dom'
import MainPage from "./mainPage";
import Contact from './contact';

import student from '../images/students.jpg'
import hod from '../images/hod.jpg'
import accept from '../images/accept.jpg'
import reject from '../images/reject.jpg'
import leave from '../images/leave.png'
import user from '../images/user.jpg'
import Studentpopup from "./studentpopup";
import Hodpopup from "./hodpopup";
const About = () => {
  
  return (
    <>
    <MainPage/>
    <div className="container about ">
       
    
      <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 txt">
           <div className="row mx-2"><h1 className="pb-3">About Us</h1> Welcome to the Leave Taking Project! We're a passionate team dedicated
           to helping individuals and organizations manage leave, whether it's for
           vacation, personal reasons, or medical necessities.
           Our mission is to simplify the leave management process and
           ensure that taking time off is stress-free for everyone involved.</div>  
           <div className="row p-2"> 
           <Link to='/studentlogin' className="col-md-4"><button className="btn btn-success ">Student Login</button></Link>
           <Link to='/hodlogin' className="col-md-8"><button className="btn btn-success">HOD Login</button></Link>
          </div>      
          
          </div>
          {/* <div className="col-sm-12 col-xs-12 col-md-1 col-lg-1 col-xl-1"></div> */}
          <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7 col-xl-7"><img className="mainimg" src={hod}/></div>
      </div>

      <div className="p-3 m-5"></div>
      <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 txt">
            <div className="row mx-2"><h2 className="text-center">Who We Are?</h2>
                Our team is made up of a diverse group of professionals with
                backgrounds in technology, human resources, and project
                management. We are united by a common goal – to create an
                exceptional leave management solution that benefits individuals,
                HR departments, and managers alike.
            </div>
            <div className="row"> <img className="mainimg" src={accept}/></div>
           
          </div>


        <div className="col-sm-12 col-xs-12 col-md-1 col-lg-1 col-xl-1"></div>


        <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 txt">
          <div className="row mx-2"><h2 className="text-center">Our Vision</h2>
              At the Leave Taking Project, we believe that everyone
              deserves the opportunity to enjoy well-deserved time away from
              work and responsibilities. Our vision is to make leave management
              seamless, efficient, and transparent. We strive to create a world
              where taking a break is as easy as sending an email to
              HOD(head of the dept)
          </div>
          <div className="row"> <img className="mainimg" src={accept}/></div>
        </div>

        <div className="p-3 m-5"></div>
        <div className="row text-center">
           <h1 className="text-center">Our Commitment </h1>
            We are committed to delivering a user-friendly, reliable, and secure
            platform for leave management. We understand the importance of time
            off for well-being and work-life balance, and we're here to support
            you in making the most of your time away.
        </div>

        <div className="row">
        <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7 col-xl-7"><img className="mainimg" src={leave}/></div>
          <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5 txt">
          <div className="row mx-2"><h2 className="text-center p-3">What We Offer?</h2>
                <ul>
                  <li> <b>User-Friendly Interface:</b> Our platform is designed with
                simplicity in mind. You can request, approve, and track leaves
                with just a few clicks.</li>
                <li>
                <b>Transparency:</b> Easily view your leave balance, history,
                </li>
                <li>
                <b>Notifications:</b> Receive timely reminders about leave
                requests and approvals, ensuring no important dates are missed.
                </li>
                </ul>
            
          </div>
          </div>
        </div>
      </div>

       
    </div>
    
    <div className="container pt-5 mt-5"><Contact/></div>
    
    
     
    
    </>
  );
};

export default About;
