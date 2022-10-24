import "./SingleForecast.style.scss";
const SingleForecast = ({forecastData,cityid}) => {
  return (
    <div className="total_page">
      <div className="main__container">
        <div className="main__container_forecast">
          <div>
            <h2>{cityid} , IR</h2>
          </div>
        </div>
        <div className="forecast_details">
          <div className="forecast_items">
            <div className="item_temp">
              <h1>{forecastData.list[0].main.temp}°</h1>
            </div>
            <div className="item_wind">
              <div className="item_detail">
                <iconify-icon icon="fontisto:wind" width="24"></iconify-icon>
                <h3>{forecastData.list[0].wind.speed}</h3>
              </div>
              <div className="item_detail">
                <iconify-icon icon="bx:moon" width="26"></iconify-icon>
                <h3>{forecastData.list[0].weather.description}</h3>
              </div>
              <div className="item_detail">
                <iconify-icon icon="akar-icons:cloud" width="26"></iconify-icon>
                <h3>{forecastData.list[0].clouds.all}</h3>
              </div>
            </div>
          </div>
          <div className="forecast_icon">
            <iconify-icon icon="charm:sun" width="128"></iconify-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleForecast;
