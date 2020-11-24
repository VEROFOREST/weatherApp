import React,{useState, useEffect} from "react";
import Weather from "./Weather";
import sun from "./icons/sun.svg";
import rainy from "./icons/rainy.svg";
import cloudy from "./icons/cloudy.svg";
import cloudySun from "./icons/cloudy-sun.svg";
import snowy from "./icons/snowy.svg";
import storm from "./icons/storm.svg";
import windy from "./icons/windy.svg";
import moment from 'moment';
import Days from './Days';




const APIConfig = ()=> {
    const key = '7241ef30e104def3b020c6f9d7fc9e58'
    const [city, setCity] = useState ('')
    const [temperature, setTemperature] = useState ('')
    const [winddeg, setWindDeg]= useState ('')
    const [windspeed, setWindSpeed]=useState ('')
    const [iconpict,setIconpict] = useState('')
    const [day,setDay] = useState('') 
    const [day1,setDay1] = useState('')
    const [day2,setDay2] = useState('')
    const [day3,setDay3] = useState('')
    const [day4,setDay4] = useState('')
    const [lat,setLat]= useState(46)
    const [long, setLong] = useState(4)
    
    // const [index, setIndex] =useState(0)
    
    const picture= {
        'Clear': sun,
        'Rain': rainy,
        'Clouds' : cloudy,
        'Atmosphere' : windy,
        'Snow' : snowy,
        'Thunderstorm' : storm,
        'Drizzle' : cloudySun,

    }   
    
    const getData = (index=0)=>{
            fetch(' http://api.openweathermap.org/data/2.5/forecast?lat=46&lon=4,&units=metric&APPID=7241ef30e104def3b020c6f9d7fc9e58')
            .then(res=>res.json())
            .then(data=>{
                // console.log (data)
            
                setCity(data.city.name);
                // setLat(data.city.coord.lat)
                setTemperature(Math.round(data.list[index].main.temp));
                setWindSpeed(Math.round((data.list[index].wind.speed)*3.6));
                setWindDeg(data.list[index].wind.deg);
                setIconpict(picture[data.list[index].weather[0].main])
                setDay(moment(data.list[index].dt_txt).format('dddd'))
                setDay1(moment(data.list[8].dt_txt).format('dddd'))
                setDay2(moment(data.list[16].dt_txt).format('dddd'))
                setDay3(moment(data.list[24].dt_txt).format('dddd'))
                setDay4(moment(data.list[32].dt_txt).format('dddd'))
                // console.log (data.city.coord.lat)
            })
        }
    useEffect(()=> {
       getData ()
       
    },[])
           
    // console.log ({setDay})

//    const getPosition = () => {
//         return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//         console.log (Promise)
//     });
//     }



    return (
       <div>
            
        <Weather    city={city}
                    temp={temperature}
                    windspeed={windspeed}
                    winddeg={winddeg}
                    icon={iconpict}/>
         <div class="day">    
                    
        <Days   day = {0}
                name = {day}
                index = {getData}
                 />
         <Days   day = {8}
                name = {day1}
                index = {getData}
                 />
         <Days   day = {16}
                name = {day2}
                index = {getData}
                 />
         <Days   day = {24}
                name = {day3}
                index = {getData}
                 />
         <Days   day = {32}
                name = {day4}
                index = {getData}
                 />
        </div>
         </div>
        
    )


}
    


export default APIConfig;