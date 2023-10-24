import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OptBoxes(props) {
  return (
    <div>
       
            <div className='row m-1' >
                <div className='row m-1' >
                    <FontAwesomeIcon icon={props.icon} />    
                </div>
                <button className='btn btn-light'>{props.name}</button>
            </div>
        </div>
    
  )
}
