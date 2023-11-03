import React from "react";
import './about.css'
// Import your CSS file
// src/components/About.js
import student from '../images/students.jpg'
import hod from '../images/hod.jpg'
import accept from '../images/accept.jpg'
import reject from '../images/reject.jpg'
import leave from '../images/leave.png'
import user from '../images/user.jpg'
const About = () => {
  const images = [
    "/images/about 1.jpg",
    "/images/accept.jpg",
    "/images/About 2.jpg",
    "/images/reject.jpg",
    "./images/leave.png",
    "./images/user.jpg",

    // Add more image URLs here
  ];

  return (
    <div className="container text-center">
      <h1>About Us</h1>
      <br></br>

      {/* <h3>Main Agenda:Asking and Granting leaves making easier from students to HOD(head of the dept)</h3><br></br>
<p>Welcome to the "ELeave-Project" page. It is with mixed emotions and a heart full of gratitude that I bid farewell to [School Name], a place I have called home for [number of years]. As the Principal of this esteemed institution, I have had the privilege of serving our dedicated students, parents, and staff.</p> */}
      <div className="image-grid">
        {/* <div className="image">
        
        <img src={images[0]} alt="Image 1" />
      </div>
      <div className="image">
        <img src={images[1]} alt="Image 2" />
      </div> */}
        <center>
          <div className="image">
            <img src={hod} alt="Image 3" />
          </div>{" "}
          <br></br>
        </center>

        {/* {/* <Add more images using a similar structure */}
      </div>
      <p className="mx-2">
        <h3>
          <b className="b1">About the leave taking Project</b>
        </h3>
        Welcome to the Leave Taking Project! We're a passionate team dedicated
        to helping individuals and organizations manage leave, whether it's for
        vacation, personal reasons, or medical necessities.{" "}
        <b>Our mission is to simplify the leave management process</b> and
        ensure that taking time off is stress-free for everyone involved.
      </p>
      <div className="image">
        <div className="row">
          <div className="col">
            <img src={student} alt="Image 1" />
          </div>

          <div className="col">
            <p className="b2">
              <h3 className="head">
                <b>Our Vision</b>
              </h3>
              <br></br>At the Leave Taking Project, we believe that everyone
              deserves the opportunity to enjoy well-deserved time away from
              work and responsibilities. Our vision is to make leave management
              seamless, efficient, and transparent. We strive to create a world
              where taking a break is as easy as sending an email to{" "}
              <b>HOD(head of the dept</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <div className="row">
          <div className="col">
            <p className="b3">
              <h2>
                <b>Who we are?</b>
              </h2>
              <br></br>
              <h3>
                The Team<br></br>
              </h3>
              Our team is made up of a diverse group of professionals with
              backgrounds in technology, human resources, and project
              management. We are united by a common goal – to create an
              exceptional leave management solution that benefits individuals,
              HR departments, and managers alike.
            </p>

            {/* <h2><b>What we offer</b></h2>

<p><b>User-Friendly Interface:</b> Our platform is designed with simplicity in mind. You can request, approve, and track leaves with just a few clicks.</p>
<p><b>Customization:</b> Tailor leave policies to fit your organization's needs, ensuring that your leave management aligns with your unique culture and requirements.</p> */}
          </div>

          <div className="col">
            <img className="im1" src={accept} alt="Image 1" />
            <img className="im2" src={reject} alt="Image 3" />
          </div>
        </div>

        <div>
          <h2>
            <b>Our Commitment</b>
          </h2>
          <p className="b4">
            We are committed to delivering a user-friendly, reliable, and secure
            platform for leave management. We understand the importance of time
            off for well-being and work-life balance, and we're here to support
            you in making the most of your time away.
          </p>
        </div>

        <div className="image">
          <div className="row">
            <div className="col">
              <img className="im1" src={leave} />
              <img className="im1" src={user} alt="Image 1" />
            </div>
            <div className="col">
              <h1>What We Offer</h1>
              <p className="b5">
                <b>User-Friendly Interface:</b> Our platform is designed with
                simplicity in mind. You can request, approve, and track leaves
                with just a few clicks.<br></br>
                <b>Customization:</b> Tailor leave policies to fit your
                organization's needs, ensuring that your leave management aligns
                with your unique culture and requirements.<br></br>
                <b>Transparency:</b> Easily view your leave balance, history,
                and upcoming leave plans, giving you full control and clarity.
                <br></br>
                <b>Notifications:</b> Receive timely reminders about leave
                requests and approvals, ensuring no important dates are missed.
              </p>
            </div>
          </div>
          <div>
            <h2>
              <b>Features</b>
            </h2>
            <p className="b6">
              <b>User Registration and Authentication:</b>
              Secure user registration and login.Role-based access control for
              administrators, managers, and employees.
              <br></br>
              <b>Leave Request Management:</b>Employees can request various
              types of leave (vacation, sick, personal, etc.). Customizable
              leave policies and approval workflows.Automatic leave balance
              tracking.<br></br>
              <b>Leave Approval Workflow:</b>
              Managers can review and approve or reject leave
              requests.Notifications for pending approvals and decision
              outcomes.<br></br>
              <b>Leave Balances and Accruals:</b>
              Real-time leave balance updates. Automatic leave accrual based on
              defined policies.<br></br>
              <b>Leave Calendar:</b>
              Visual representation of leave schedules for teams and
              individuals. Color-coded leave types for easy identification.
              <br></br>
              <b>Integration with Calendars:</b>
              Synchronization with popular calendar apps (Google Calendar,
              Outlook, etc.). Two-way updates between eLeaveHub and external
              calendars.<br></br>
              <b>Reporting and Analytics:</b>
              Comprehensive leave history and usage reports. Insights into
              trends and leave patterns.<br></br>
              <b>Notifications and Reminders:</b>
              Email or in-app notifications for leave requests, approvals, and
              reminders. Reminders for upcoming leave dates.<br></br>
              <b>Customization:</b>
              Configurable settings for organization-specific leave policies.
              Branding and theming options.<br></br>
              <b>Document Upload:</b>
              Capability for employees to attach supporting documents for leave
              requests (e.g., medical certificates).<br></br>
              <b>Mobile Accessibility:</b>
              Responsive design for access on mobile devices. Mobile apps for
              iOS and Android.<br></br>
              <b>Time-Off Pools:</b>
              Support for different leave categories or pools (e.g., annual
              leave, comp time, maternity leave).<br></br>
              <b>Time Tracking:</b>
              Integration with time-tracking tools to deduct leave from working
              hours.<br></br>
              <b>Holiday Calendars:</b>
              Pre-defined or customizable holiday calendars for different
              regions.<br></br>
              <b>Employee Self-Service Portal:</b>
              Employees can view and manage their leave balances and requests.
              <br></br>
              <b>Compliance and Regulations:</b>
              Ensure compliance with labor laws and regulations.<br></br>
              <b>API for Integration:</b>
              API for integrating with other HR or payroll systems.<br></br>
              <b>Data Security:</b>
              Encryption of sensitive data. Regular data backups.<br></br>
              <b>Support and Help Center:</b>
              Access to FAQs, user guides, and customer support.<br></br>
              <b>Audit Trail:</b>
            </p>
          </div>
          <div>
            <p className="b7">
              <b>Contact Us</b>
              <br></br>
              We value your feedback and questions. Feel free to reach out to us
              at contact@leavetakingproject.com. We're here to assist you with
              any inquiries or support needs. Thank you for visiting the Leave
              Taking Project. We look forward to helping you take the stress out
              of leave management and make your time off a truly rejuvenating
              experience.
            </p>
          </div>
          <div>
            <button className="b1 bg-success p-3">register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
