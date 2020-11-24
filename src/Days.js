import React,  {useState} from 'react';

const Days = (props)=> {
    
    return (
        
         <div className="card-action">
               
            
                        <a onClick={()=>props.index(props.day)} style={{fontWeight: 'bold'}}>{props.name}</a>
                
                         {/* <a onClick={()=>props.index(8)}>{props.day1}</a>
                        <a onClick={()=>props.index(16)}>{props.day2}</a>
                        <a onClick={()=>props.index(24)}>{props.day3}</a>
                        <a onClick={()=>props.index(32)}>{props.day4}</a>
          */}

        </div>
   


    )


}





export default Days