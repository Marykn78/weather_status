// import '../../pages/Home/Home.style.scss';
const Cards = ({ dataa }) => {
  //   const datacard = [{ icon:<iconify-icon icon="carbon:temperature-celsius" width="56"></iconify-icon>, title: "دما",detail:dataa.main.temp },
  // ];
  return (
    <div className="card-status">
      <div className="card_item">
        {/* {datacard.map(card=>(
                <>
                    <div className="item">{card.icon}</div>
                    <div className="item">{dataa.main ? <h2>{card.data}</h2> : null}</div>
                    <div className="item"><h3 className="item_description">{card.title}</h3></div>
                </>
                
            ))} */}
        <div className="item">
          <iconify-icon
            icon="carbon:temperature-celsius"
            width="56"
          ></iconify-icon>
        </div>
        <div className="item">
          {dataa.main ? <h2>{dataa.main.temp}</h2> : null}
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
          {dataa.wind ? <h2>{dataa.wind.speed}</h2> : null}
          {/* <h2>{data.wind.speed}</h2> */}
        </div>
        <div className="item">
          <h3 className="item_description">سرعت باد</h3>
        </div>
      </div>
      <div className="card_item">
        <div className="item">
          <iconify-icon
            icon="fluent:weather-cloudy-24-regular"
            width="56"
          ></iconify-icon>
        </div>
        <div className="item">
          {dataa.clouds ? <h2>{dataa.clouds.all}</h2> : null}
          {/* <h2>{data.clouds.all}</h2> */}
        </div>
        <div className="item">
          <h3 className="item_description">میزان ابری بودن</h3>
        </div>
      </div>
      <div className="card_item">
        <div className="item">
          {dataa.weather ? (
            <img
              className="icon_city"
              src={`http://openweathermap.org/img/w/${dataa.weather[0].icon}.png`}
              alt=""
            />
          ) : null}
        </div>
        <div className="item">
          {dataa.weather ? <h4>{dataa.weather[0].description}</h4> : null}
          {/* <h3>{data.main}</h3> */}
        </div>
        <div className="item">
          <h3 className="item_description">وضعیت هوا</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
