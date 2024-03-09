import React from 'react'
import '../Style/firstcomp.css'
function FirstComponent(){
let js_obj = ["first","second","third","fourth"];
function display_data(value,index,array){
   return(
    <li id={index}>{value}</li>

   );    
}
return (
    <div class='my-div'>
        <p id='my-p'>Hello this is my first </p>
        <div class='inner-div'>
        <ul>
         <li><h1>The First List</h1></li>
        {js_obj.forEach(display_data)}   
        </ul>
        </div>

   </div>     
);

};

export default FirstComponent;