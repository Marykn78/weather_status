import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import SingleForecast from "../../components/SingleForecast/SingleForecast";
import SliderForecast from "../../components/SliderForecast/SliderForecast";
const Forecastpage = () => {
  const {cityid} =useParams() 
  const [forecastData,setForecast]=useState()
  const [pending,setpending]=useState(true)
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityid}&lang=fa&units=metric&appid=196944c23663e73dfaf15cfcdeb48277`

  const forecastHandler =async()=>{
    const data =await axios(url).then(response=>response.data)
    if(data.cod==='200'){
      setForecast(data)
    }
  }
  useEffect(()=>{
    if(forecastData?.list?.length){
      setpending(false)
    }
  },[forecastData])
  useEffect(()=>{
    forecastHandler()
  },[])

  if(pending){
    return <div>pending</div>
  }
  return(
    <>
    <SliderForecast forecastData={forecastData} cityid={cityid} />
      {/* <h2>{forecastData.list[0].main.temp}</h2> */}
      
    </>
  )
};

export default Forecastpage;


  // const [cityfuture,setFuture]=useState('')
      // useEffect(()=>{
  //   setForecast(cities.filter(city=>city === Number(cityid))[0])
  // },[])
    // const forecastHandler =async()=>{
  //   await axios.get(url).then((response)=>{
  //   setForecast(response.data)
  //   // console.log(response.data.list[0].main.temp)
  //   })
  // }     