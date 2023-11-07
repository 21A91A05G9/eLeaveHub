import { useState } from "react"
import './hodaccept.css'
import axios from "axios"
import { useParams } from "react-router-dom"
import MainPage from "./mainPage"
import Sidebar from "./sidebar"
export default function Hodaccept(){
    const {id} = useParams()
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
        axios.post("http://localhost:5111/getdata/"+id).then((res)=>{
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
        <>
        <div className='container'>
        <div className="row dash">
            <Sidebar />
            <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 main'>
            <h2>Requests To Approve</h2>
            <div class="maindiv row">
                <span className="col">Name</span > <span className="col">Roll No.</span> <span className="col">Reason</span> 
                <button className="col-1 btn btn-success mx-2">Accept</button> <button className="col-1 btn btn-danger mx-2">Reject</button>
            </div>
            {       
                    arr.map((e,i)=>{
                        
                        if(e.count==='-1'){
                        return(
                            <div class="div row">
                                <span className="col">{e.name}</span> <span className="col">{e.rollnum}</span><span className="col">{e.reason}</span>
                                <button class='btn btn-success col-1 mx-2' onClick={()=>handleaccept((e._id))}>Accept</button>

                                <button class='btn btn-danger col-1 mx-2' onClick={()=>handlereject((e._id))}>Reject</button>
                                {/* {console.log(e)} */}
                            </div>
                    )}
                })
            }
        </div>
        </div>
        </div>

        </>
    )}
    else{
        return(
        <>
            <div className='container'>
            <div className="row dash">
            <Sidebar />
            <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 main'>
            
            Oops!! Already all requests has been viwed:)/no Requests
           </div>
           </div>
           </div>
        </>
        
        )
    }
}