
 import {faHomeUser,faHandPointLeft,faCircleXmark,faCheckSquare ,faChartPie,facl,faListUl,faPaperPlane,faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons'
    import React, { useState } from 'react'
    import './student.css'
    import Sidebar from './sidebar'
    import Counter from './counter'
    import { Link, useNavigate } from 'react-router-dom';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   // import { faCircleXmark,faCheckSquare ,faChartPie,faListUl} from '@fortawesome/free-solid-svg-icons'
    import OptBoxes from './optBoxes'
    import Calender from './calender'
    import { useParams } from 'react-router-dom';
    import axios from 'axios';
    export default function Student() {
        const {id} = useParams();
        const [std,setstd]=useState({});
        const [ac,setac]=useState(0)
        const [rc,setrc]=useState(0)
        const [pc,setpc]=useState(0)
        const nav=useNavigate()
        axios.post("http://localhost:5111/findstudent/"+id).then((res)=>{
            setstd(res.data)
        //    console.log(std.name)
        })
        axios.post("http://localhost:5111/countupdate1/"+id).then((res)=>{
            setac(res.data)
        //    console.log(std.name)
        })
        axios.post("http://localhost:5111/countupdate0/"+id).then((res)=>{
            setrc(res.data)
        //    console.log(std.name)
        })
        axios.post("http://localhost:5111/countupdate-1/"+id).then((res)=>{
            setpc(res.data)
        //    console.log(std.name)
        })
        // const name=std.name
        // var s;
        // if(!s){
        //     s=std.name
        // }
        const s=std.name
        console.log(std.name)
  return (
    <>
        <div className='container-fluid'>
            <div className='row dash'>
                <Sidebar id={id}/>
              
                {/* <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 '>k</div> */}
                <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 box' >
                    <h1 className='pt-4 pb-1 mx-5 wel'>{s}...</h1>
                    <div className="row " >
                    <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4 col-xs-4 mx-3' >
                        <div className='row leaveCnt' > <Counter purpose="Overall Requests" cnt={ac+rc+pc}/> </div>
                    </div>    

                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12' >
                        <div className='row leaveCnt m-3 '> <Calender/> </div>
                    </div> 
                    {/* <div className='mainbox col-md-5 p-4 rounded'>
                        <Link to='/requestleave'><button className="btnReq p-2"><FontAwesomeIcon  icon={faPaperPlane} />&nbsp;Request</button></Link>
                        <div className='row pt-4'>
                            <b className='col-3'>Accepted {}</b>
                            <b className='col-3'>Rejected {}</b>
                            <b className='col-3'>Pending {}</b>
                        </div>
                    </div> */}
                    <div className='row bottom pt-5'>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 row  '>
                                
                                <div className='req'><b> 
                                {/* <FontAwesomeIcon icon={faEnvelopesBulk} className="reqicon pt-4"/> */}
                                
                                
                                    <button className=" btn-success reqbtn row">
                                    <b className='col mainbtn' onClick={()=>nav('/requestleave/'+id)}>Request</b></button></b>
                                    {/* <div class="spinner-grow text-success col" role="status" >
                                    <span className="visually-hidden ">Loading... </span>
                                    </div> */}
                                    
                                   
                                    
                                </div>
                           
                        </div>
                        
                        <div className='col-md-9 col-lg-8 col-xl-8 col-sm-12 col-xs-12 boxmain'>
                            <div className='row boxesrow'>
                                <div className='col-md-4 boxes m-1' >
                                    <div className='row'><OptBoxes name="Accepted" cnt={ac} icon={faCheckSquare}/></div>
                                </div>
                                <div className=' col-md-4 boxes m-1'>
                                    <div className='row  '><OptBoxes name="Rejected" cnt={rc} icon={faCircleXmark}/></div>
                                </div>
                                <div className='col-md-4 boxes m-1'>
                                    <div className='row '><OptBoxes name="Pending" cnt={pc} icon={faChartPie}/></div>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                   
                    
                    {/* <div className='col-md-4 col-lg-4 col-xl-4 col-sm-2 col-xl-2' >kk</div> */}
                    
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
