import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './optBoxes.css'
export default function OptBoxes(props) {

  return (

    <div>
            <div className='row m-1' >
                <div className='row m-1' >
                    <FontAwesomeIcon icon={props.icon} className="myicon col"/> 
                    <div className='col'></div>   
                </div>
                <button className='btn btn-light'>{props.name}</button>
            </div>
        </div>
    
  )
}
