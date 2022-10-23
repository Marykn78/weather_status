const Header = ({ dataa, searchCity, location, setLocation }) => {
  // const cityName =[{city:'تهران'},{city:'مشهد'},{city:'کرمان'},{city:'یزد'}]
  return (
    <>
      <div className="card_title">
        <iconify-icon
          icon="fluent:weather-fog-48-regular"
          width="44"
          style={{ color: "white" }}
        ></iconify-icon>
      </div>
      <div className="select_container">
        <div className="city_select">
          <input
            className="search_input"
            style={{ outline: 0 }}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder={"شهر خود را وارد کنید..."}
            onKeyPress={searchCity}
          />
          {/* <select name="city" onClick={searchCity} value={location}>
                        {cityName.map(item=>(
                            <option value={item.city} onChange={e=>setLocation(e.target.value)}>{item.city}</option>
                        ))}
                    </select> */}
        </div>
        <div className="city_name">
          <h2 style={{ color: "white" }}>{dataa.name}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
