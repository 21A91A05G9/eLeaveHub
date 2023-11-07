import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './optBoxes.css'
export default function OptBoxes(props) {

  return (

    <div>
        <div className='row ' >
        
            {/* <FontAwesomeIcon icon={props.icon} className="myicon col"/> */}
            <b>{props.name}</b>
            <b>{props.cnt}</b>
        </div>
    </div>

    
  )
}
