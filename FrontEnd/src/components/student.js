
    import {faHomeUser,faHandPointDown,faCircleXmark,faCheckSquare ,faChartPie,faListUl,faPaperPlane,faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons'
    import React, { useState } from 'react'
    import './student.css'
    import Studiv from './studiv'
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
        <div className='container-fluid dashboard'>
            <div className='row dash'>
                <Sidebar id={id} to={'/sendemail'}/>
              
                {/* <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1 '>k</div> */}
                <div className='col-md-11 col-lg-11 col-xl-11 col-sm-10 col-xs-10 box' >
                    <h1 className='pt-4 pb-1 mx-5 wel'>{s}...</h1>
                    <div className="row " >
                    <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4 col-xs-4 mx-3 pt-4' >
                        <div className='row leaveCnt' > <Counter purpose="Overall Requests" cnt={ac+rc+pc}/> </div>
                    </div>    

                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12' >
                        <div className='row '> <Calender/> </div>
                    </div> 
                    {/* <div className='mainbox col-md-5 p-4 rounded'>
                        <Link to='/requestleave'><button className="btnReq p-2"><FontAwesomeIcon  icon={faPaperPlane} />&nbsp;Request</button></Link>
                        <div className='row pt-4'>
                            <b className='col-3'>Accepted {}</b>
                            <b className='col-3'>Rejected {}</b>
                            <b className='col-3'>Pending {}</b>
                        </div>

                    </div> */}
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12  msg'>  
                                {/* <FontAwesomeIcon icon={faEnvelopesBulk} className="reqicon pt-4"/> */}
                                <p className='text-center p-5  pb-1 pt-1'>click here to send request <FontAwesomeIcon icon={faHandPointDown} className="reqicon"/></p>
                                <button  className=" btn-success btn" onClick={()=>nav('/requestleave/'+id)} ><FontAwesomeIcon icon={faPaperPlane} className="reqicon"/></button>
                                {/* <button className=" btn-success btn req" onClick={()=>nav('/requestleave/'+id)}> <FontAwesomeIcon style={{color:'white'}} icon={faPaperPlane} className="reqicon"/></button> */}
                                {/* <button class=" btn-success btn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane reqicon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg></button> */}
                                
                        </div>
                        
                        <div className='col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12 boxmain m-2 p-3' >
                            <div className='row boxesrow'>
                                <div className='col p-3 m-2' >
                                    <div className='row'><OptBoxes name="Accepted" cnt={ac} icon={faCheckSquare}/></div>
                                </div>
                                <div className=' col p-3 m-2'>
                                    <div className='row  '><OptBoxes name="Rejected" cnt={rc} icon={faCircleXmark}/></div>
                                </div>
                                <div className='col p-3 m-2'>
                                    <div className='row '><OptBoxes name="Pending" cnt={pc} icon={faChartPie}/></div>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                   
                    {/* <div className='col-md-4 col-lg-4 col-xl-4 col-sm-2 col-xl-2' >kk</div> */}
                    <div><Studiv id={id}/> </div>
                    
                    <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
                    </div>
                    <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                    </div>
                    <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
