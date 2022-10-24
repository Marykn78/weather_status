// import axios from 'axios';
import React,{useState} from 'react';
// import { useEffect } from 'react';
import SingleForecast from '../SingleForecast/SingleForecast';
// import CardSmall from '../card/CardSmall';

const SliderForecast = ({forecastData,cityid}) => {
    const counter=[
        0,1,,2,3,4
    ]
    const c=[0,8,16,24]
    const [currentIndex,setCurrentIndex]=useState(0)

    const left={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const right={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const goToPrev=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide?counter.length-1 : currentIndex-1;
        setCurrentIndex(newIndex)
    }
    const goToNext=()=>{
        const isLastSlide=currentIndex===counter.length-1;
        const newIndex=isLastSlide?0: currentIndex+1;
        setCurrentIndex(newIndex);
    }
    return ( 
        <div>
          <SingleForecast forecastData={forecastData} cityid={cityid}/>
          <div>
            <div style={left} onClick={goToPrev}><iconify-icon icon="ep:arrow-left-bold"></iconify-icon></div>
           {/* {futureDays.filter((day)=>(day.id===currentIndex)).map((day)=>(
                      <CardSmall day={day} />
          ))} */}
          <div style={right} onClick={goToNext}><iconify-icon icon="ep:arrow-left-bold" rotate="180deg"></iconify-icon></div>
          </div>
    



        </div>
     );
}
 
export default SliderForecast;