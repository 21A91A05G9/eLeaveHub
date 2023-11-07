import React from 'react'
import $ from 'jquery';
import './counter.css'
export default function counter(props) {
    // <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
 
    // $(document).ready(function(){
    //     $('.counter-value').each(function(){
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         },{
    //             duration: 3500,
    //             easing: 'swing',
    //             step: function (now){
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // });
  return (
        
            
    <div class="container mt-4">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="counter">
                <div class="counter-icon">
                    <i class="fa fa-globe"></i>
                </div>
                <span class="counter-value">{props.cnt}</span>
                <h3>Overall Requests</h3>
            </div>
        </div>
        
    </div>
</div>
           
  )
}
