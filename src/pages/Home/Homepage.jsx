// import { data } from "../../Data/db";
import axios from "axios";
import { useState } from "react";
import "./Home.style.scss";
import {useDispatch, useSelector} from 'react-redux'
import Forecastday from "../../components/Forecastdays/Forecast";
import { Link } from "react-router-dom";
const cityName =[{city:'تهران'},{city:'مشهد'},{city:'کرمان'},{city:'یزد'}]

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q=london&appid=196944c23663e73dfaf15cfcdeb48277
// `http://openweathermap.org/img/w/${city.icon}.png`
const Homepage = () => {
    const [data,setData] =useState({})
    const [location,setLocation]=useState('')
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=fa&units=metric
    &appid=196944c23663e73dfaf15cfcdeb48277`
    const searchCity =(e)=>{
        // axios.get(url).then((response)=>{
        //     setData(response.data)
        //     console.log(response.data)
        // })
        // setLocation('') 
        
        if(e.key === 'Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
                // console.log(response.data)
            })
            setLocation('')
        }  
    }
    // const weather =useSelector(state=>(state.weather))
    // const dispatch =useDispatch()
    // const addcity =()=>{
    //     dispatch(addcity)
    // }
    return (
    <div className="card-container">
        <div className="main_card">
            <div className="card_title">
                {/* <h4>وضعیت آب وهوا</h4> */}
                <iconify-icon icon="fluent:weather-fog-48-regular" width="44" style={{color:"white"}}></iconify-icon>
            </div>
            <div className="select_container">
                <div className="city_select">
                    <input className="search_input" style={{outline:0}} type="text"
                    onChange={e=>setLocation(e.target.value)}
                    value={location}
                    placeholder={'شهر خود را وارد کنید...'}
                    // onClick={searchCity}
                    onKeyPress={searchCity}
                    />
                    {/* <select name="city" onClick={searchCity} value={location}>
                        {cityName.map(item=>(
                            <option value={item.city} onChange={e=>setLocation(e.target.value)}>{item.city}</option>
                        ))}
                    </select> */}
                </div>
                <div className="city_name">
                    <h2 style={{color:"white"}}>{data.name}</h2>
                </div>
            </div>
            <div className="card-status">
                <div className="card_item">
                    <div className="item">
                        <iconify-icon icon="carbon:temperature-celsius" width="56"></iconify-icon>
                    </div>
                    <div className="item">
                        {data.main ? <h2>{data.main.temp}</h2>:null}
                        {/* <h2>22.5c</h2> */}
                    </div>
                    <div className="item">
                        <h3 className="item_description">دما</h3>
                    </div>
                </div>
                <div className="card_item">
                    <div className="item">
                        <iconify-icon icon="fontisto:wind" width="56"></iconify-icon>
                    </div>
                    <div className="item">
                        {data.wind ? <h2>{data.wind.speed}</h2>:null}
                        {/* <h2>{data.wind.speed}</h2> */}
                    </div>
                    <div className="item">
                        <h3 className="item_description">سرعت باد</h3>
                    </div>
                </div>
                <div className="card_item">
                    <div className="item">
                        <iconify-icon icon="fluent:weather-cloudy-24-regular" width="56"></iconify-icon>
                    </div>
                    <div className="item">
                        {data.clouds ? <h2>{data.clouds.all}</h2>:null}
                        {/* <h2>{data.clouds.all}</h2> */}
                    </div>
                    <div className="item">
                        <h3 className="item_description">میزان ابری بودن</h3>
                    </div>
                </div>
                <div className="card_item">
                    <div className="item">
                        {data.weather ? <img className="icon_city" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />:null}
                        {/* <iconify-icon icon="charm:moon" width="56"></iconify-icon> */}
                    </div>
                    <div className="item">
                        {data.weather ? <h4>{data.weather[0].description}</h4>:null}
                        {/* <h3>{data.main}</h3> */}
                    </div>
                    <div className="item">
                        <h3 className="item_description">وضعیت هوا</h3>
                    </div>
                </div>
            </div>
            <div>
                <Link to={"/forecast"}>
                    <Forecastday/>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Homepage;
