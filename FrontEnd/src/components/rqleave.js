import './mainPage.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Sidebar from './sidebar';
function Rqleave(props){
    const {id} = useParams();
    const [formdata,setFormdata] = useState({
        'name':'',
        'rollnum':'',
        'email':'',
        'reason':''
    })
    const nav=useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post("http://localhost:5111/formdata",formdata).then((res)=>{
            alert(res.data.msg)
            if(res.data.msg==='Email sent successfully to your hod'){nav('/studentdashboard/'+id)}
        })
        
    }
    return(
        <div className='container'>
        <div className="row dash">
            <Sidebar id={props.id}/>
            <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 box'>
            <h2 id='rq'>FILL THE DETAILS</h2>
            
            <form className="form-horizontal mt-5" onSubmit={handlesubmit}>
            <table className="container">

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">Name:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" name="name" class="form-control" placeholder="type your name here" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">RollNumber:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" name="rollnum" class="form-control" placeholder="EX: XXXXXX05F6" value={formdata.rollnum} onChange={(e)=>setFormdata({...formdata,rollnum:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">Your Email:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="email" name="rollnum" class="form-control" placeholder="xxxx@gmail.com" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
                    </td>
                </tr>

                
                
                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">ReasonForLeave:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <textarea type="text" class="form-control" rows="5" name="reason" value={formdata.reason} onChange={(e)=>setFormdata({...formdata,reason:e.target.value})}></textarea>

                    </td>
                </tr>
                <tr className='row mt-3'>
                    <button className='but1 col-md-2 offset-md-5' type='submit'>send</button>
                </tr>
                </table>
            </form>
            </div>
        </div>
        </div>
        
    )
}
export default Rqleave;