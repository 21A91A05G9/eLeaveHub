import './mainPage.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
function Rqleave(){
    const [formdata,setFormdata] = useState({
        'name':'',
        'rollnum':'',
        'email':'',
        'phnum':'',
        'branch':'',
        'college':'',
        'reason':''
    })
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post("http://localhost:5111/formdata",formdata).then((res)=>alert(res.data.msg))
        
    }
    return(
        <div className="container">
            <h2 id='rq' className='text-center'>FILL THE DETAILS</h2>
            
            <form className="form-horizontal" onSubmit={handlesubmit}>
            <table className="container">

                <tr  class="row">
                    <td className="col-md-2 lab-td">
                    <label className="lab">Name:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" name="name" class="form-control" placeholder="type your name here" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2  lab-td">
                    <label className="lab">RollNumber:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" name="rollnum" class="form-control" placeholder="EX: XXXXXX05F6" value={formdata.rollnum} onChange={(e)=>setFormdata({...formdata,rollnum:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 lab-td">
                    <label className="lab">Email:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="email" name="rollnum" class="form-control" placeholder="xxxx@gmail.com" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 lab-td">
                    <label className="lab">PhoneNumber:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="number" name="phnum" class="form-control" placeholder="mobile number" value={formdata.phnum} onChange={(e)=>setFormdata({...formdata,phnum:e.target.value})} />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2  lab-td">
                    <label className="lab">Branch:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" name="branch" class="form-control" placeholder="cse/ece/eee...." value={formdata.branch} onChange={(e)=>setFormdata({...formdata,branch:e.target.value})} />
                    </td>
                </tr>
                <tr  class="row">
                    <td className="col-md-2 lab-td">
                    <label className="lab">College:</label>
                    </td>
                    <td className="col-md-5">
                    <input type="text" name="college" class="form-control" placeholder="aec/acet/acoe" value={formdata.college} onChange={(e)=>setFormdata({...formdata,college:e.target.value})} />
                    </td>
                </tr>
                <tr  class="row">
                    <td className="col-md-2  lab-td">
                    <label className="lab">ReasonForLeave:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <textarea type="text" class="form-control" rows="5" name="reason" value={formdata.reason} onChange={(e)=>setFormdata({...formdata,reason:e.target.value})}></textarea>

                    </td>
                </tr>
                <tr className='row mt-3'>
                    <button className='but1 col-md-2 offset-md-2 ' type='submit'>Send</button>
                    <button className='but1 col-md-2 ' type='submit'><Link style={{color:"white"}} to='/student'>Back</Link></button>
                </tr>
                </table>
            </form>
            
        </div>
        
        
    )
}
export default Rqleave;