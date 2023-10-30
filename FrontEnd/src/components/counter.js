import React from 'react'
import $ from 'jquery';
import './counter.css'
export default function counter(p) {
    $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 500,
                easing: 'swing',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
  return (
        <div class="row">
            
                <div class="counter">
                    <span class="counter-value">{p.cnt}</span>
                    <h3>{p.purpose}</h3>
                </div>
           
                    
        </div>

  )
}
