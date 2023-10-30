import { useState } from "react"
import './hodaccept.css'
import axios from "axios"

export default function Hodaccept(){
    function handleaccept(id){
        const con=window.confirm("do you want to accept??")
        if(con){
        axios.put("http://localhost:5111/set1/"+id)
        }
    }

    function handlereject(id){
        const con=window.confirm("do you want to REJECT??")
        if(con){
        axios.put("http://localhost:5111/set0/"+id)
        }
    }
    const [arr,setarr]=useState([])
    var c=0,flag=0;
    function fun(){
        axios.post("http://localhost:5111/getdata").then((res)=>{
                    setarr(res.data)
                    // console.log(res.data.length)
                    c++;
                     if(c==res.data.length){
                        flag=1;
                        return 0
                        }
                })}
        if(flag==0){
            fun()
        }
        console.log(arr.length)
    if(arr.length!=0){
    return(
        <div class='main'>
            
            {       
                    
                    arr.map((e,i)=>{
                        if(e.count==='-1'){
                        return(
                            <div class="row details">

                             <span className="col-md-3 my-2"> <b>Name:</b>{e.name}</span>
                             <span className="col-md-3 my-2"><b>RollNumber:</b>{e.rollnum}</span>
                             <span className="col-md-3 my-2"><b>Reason:</b>{e.reason}</span>
                                <button class='accept col-md-1 p-1 my-2' onClick={()=>handleaccept((e._id))}>Accept</button>

                                <button class='reject col-md-1 p-1 my-2' onClick={()=>handlereject((e._id))}>Reject</button>
                                {/* {console.log(e)} */}
                                
                            </div>
                    )}
                })
            }
        </div>
    )}
    else{
        return(
        <center style={{marginTop:"100px"}}>
        Oops!! Already all requests has been viwed../no Requests
        </center>
        )
    }
}