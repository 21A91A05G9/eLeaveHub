import './mainPage.css'
function Rqleave(){
    return(
        <div className="container">
            <h2 id='rq'>FILL THE DETAILS</h2>
            
            <form className="form-horizontal mt-5">
            <table className="container">

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">Name:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" class="form-control" placeholder="type your name here" />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">RollNumber:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" class="form-control" placeholder="EX: XXXXXX05F6" />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">Email:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="email" class="form-control" placeholder="xxxx@gmail.com" />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">PhoneNumber:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="number" class="form-control" placeholder="mobile number" />
                    </td>
                </tr>

                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">Branch:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" class="form-control" placeholder="cse/ece/eee...." />
                    </td>
                </tr>
                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">College:</label>
                    </td>
                    <td className="col-md-5"> 
                    <input type="text" class="form-control" placeholder="aec/acet/acoe" />
                    </td>
                </tr>
                <tr  class="row">
                    <td className="col-md-2 offset-md-2 lab-td">
                    <label className="lab">ReasonForLeave:</label> 
                    </td>
                    <td className="col-md-5"> 
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>

                    </td>
                </tr>
                <tr className='row mt-3'>
                    <button className='but1 col-md-2 offset-md-5'>SEND MAIL TO HOD</button>
                </tr>
                </table>
            </form>
            
        </div>
        
        
    )
}
export default Rqleave;