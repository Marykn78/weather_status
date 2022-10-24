import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import SingleForecast from "../../components/SingleForecast/SingleForecast";
const Forecastpage = () => {
  const {cityid} =useParams() 
  // console.log(cityid)
  const [forecastData,setForecast]=useState()

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityid}&lang=fa&units=metric&appid=196944c23663e73dfaf15cfcdeb48277`

  console.log(forecastData.list[0].main.temp)
  const forecastHandler =async()=>{
    const data =await axios(url).then(response=>response.data)
    setForecast(data)
    // console.log(data.list[0].main.temp)
    // console.log(data.list[0].wind.speed)
  }
  useEffect(()=>{
    forecastHandler()
  },[])
  // console.log(forecastData)
  
  return(
    <>
      <h2>{ forecastData?.data?.list?.[0]?.main?.temp}</h2>
      {/* {forecastData.data ? <h2>{forecastData.data.list[0].temp}</h2>:null} */}
      {/* <SingleForecast/> */}
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