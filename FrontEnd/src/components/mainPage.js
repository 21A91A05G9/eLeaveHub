import './mainPage.css'
import { Link } from 'react-router-dom';
function MainPage(){
    
    return(
        <>
        <div className="container-fluid">
        <nav class="navbar fixed-top navbar-inverse navbar-expand-md">
        
            <b><span id="sp" class="navbar-brand" style={{color:"white"}}>eLeave</span><span style={{color:"rgb(151, 151, 151)"}}>Hub</span></b>
                    
            <button class="navbar-toggler menu-but" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="navbar-collapse collapse" id="menu">
                    
            <ul class="nav navbar-nav ms-auto">
                        
                <li class="dropdown nav-item">
                    <Link to="/" class="nav-link" style={{color:"white"}}>HOME</Link>
                    {/* <a href="" class="nav-link" style={{color:"black"}}>HOME</a> */}
                </li>
                <li class="dropdown nav-item">
                    <Link to="/requestleave" class="nav-link" style={{color:"white"}}>MAIL</Link>
                </li>
                <li class="dropdown nav-item">
                    <Link to="/about" class="nav-link" style={{color:"white"}}>ABOUT US</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link" style={{color:"white"}}>CONTACT US</Link>
                </li>
            </ul>
            
            </div>
        </nav>


        </div>
        </>
    )
}
export default MainPage;