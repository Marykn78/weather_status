import axios from "axios";
import { useState } from "react";

const Forecastpage = () => {
  const [forecasrData,setForecast]=useState({})
  // const []
    const options = {
      method: 'GET',
      url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/${}/summary/',
      headers: {
        'X-RapidAPI-Key': 'd69acd1196msh73f7819ad6577b4p1d4145jsn5c807b2c1584',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
        setForecast(response.data);
    }).catch(function (error) {
        console.error('hi');
    });
  return(
    <>
        {forecasrData.main ? <h2>{forecasrData.items.wind.avg}</h2>:null}
        {/* <h1>{forecasrData.items.wind}</h1> */}
    </>
  )
};

export default Forecastpage;
