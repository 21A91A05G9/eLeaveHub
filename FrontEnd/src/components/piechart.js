import React from 'react'
import './piechart.css'
export default function piechart(props) {
  return (
    <div class="pie">
        <div class="html">{props.pre}% Present Rate</div>
        <div class="css">{props.abs}% Absent Rate</div>
    </div>
  )
}
