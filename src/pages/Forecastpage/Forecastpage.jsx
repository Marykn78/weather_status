import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import SingleForecast from "../../components/SingleForecast/SingleForecast";
// import { addCity } from "../../redux/reducer/weatherslice";
const Forecastpage = () => {
  const cities =useSelector(state=>state.weather)
  const {cityid} =useParams() 
  // console.log(cityid)
  const [forecastData,setForecast]=useState({})
  // const [cityfuture,setFuture]=useState('')
  useEffect(()=>{
    //setFuture ,${cityfuture.name}
    setForecast(cities.filter(city=>city === Number(cityid))[0])
  },[])
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityid}&lang=fa&units=metric&appid=196944c23663e73dfaf15cfcdeb48277`
  const dispatch =useDispatch()
  const forecastHandler =()=>{
    axios.get(url).then((response)=>{
        // dispatch(addCity(setForecast(response.data)))
        setForecast(response.data.list)
        // console.log(response.data.cod)
    })
    // setFuture('')
  }
  // console.log(forecastData)
  
  return(
    <>
      {/* <div>
        <button onClick={forecastHandler}>show</button>
      </div> */}
      {/* {forecastData.list ? <h2>{forecastData.list}</h2>:null} */}
      <SingleForecast/>
    </>
  )
};

export default Forecastpage;


    // const options = {
    //   method: 'GET',
    //   url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/${}/summary/',
    //   headers: {
    //     'X-RapidAPI-Key': 'd69acd1196msh73f7819ad6577b4p1d4145jsn5c807b2c1584',
    //     'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    //   }
    // };
    // axios.request(options).then(function (response) {
    //     setForecast(response.data);
    // }).catch(function (error) {
    //     console.error('hi');
    // });