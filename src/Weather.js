import React, {useState} from 'react';
// import icons from './icons';
import sun from './icons/sun.svg';
import Days from './Days';


const Weather = (props)=>{

    return (
        

        <div className="card-content white-text">
            <span className="card-title">{props.city}</span>
            <p><img src={props.icon}/></p>
            <span className="temperature">{props.temp}°</span>
            <div className="wind">Vent {props.windspeed}km/h ({props.winddeg}°)</div>
        </div>
                    
                
        
    )




}








export default Weather