import axios from "axios"
import { useState } from "react"
export default function Studiv(props){
    const [data,setdata]=useState([])
    const [cls,setcls]=useState("")
    axios.post("http://localhost:5111/showdata/"+props.id).then((res)=>{
            setdata(res.data)
            console.log(res.data)
    }) 
    
    if(data.length!=0){
        return(
            <div className="container-fluid">
                
                <center><h3 className="leavetitle pt-3 pb-1">leave requests details</h3></center>
                {   
                // console.log("jk")
                
                data.map(ele=>{
                    return(
                    <div className="row">
                    {/* {(ele.count==1)?setcls("accepted"):(ele.count==0)?setcls("rejected"):setcls("pending")} */}
                    <div className="col-md-1"></div>
                    <div className="col-md-11 row alert" style={{backgroundColor:(ele.count==1)?" #d1e7dd":(ele.count==0)?"#f8d7da":"#fff3cd",color:(ele.count==1)?"#0f5132":(ele.count==0)?"#842029":"#664d03"}}><span className="col">Name:{ele.name}</span> <span className="col">RollNumber:{ele.rollnum}</span> <span className="col">Status:{(ele.count==1)?"accepted":(ele.count==0)?"rejected":"pending"}</span></div>
                    </div>
                )})
                
            }
            </div>
        )
    }

}