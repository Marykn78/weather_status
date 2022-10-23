import './SingleForecast.style.scss';
const SingleForecast = () => {
    return ( 
        <div  className="main__container">
            <div className="main__container_forecast">
                <div>
                    <h2>Tehran,IR</h2>
                </div>
            </div>
            <div className='forecast_details'>
                <div className='forecast_items'>
                    <div className='item_temp'>
                        <h1>25</h1>
                    </div>
                    <div className='item_wind'>
                        <div className='item_detail'>
                            <iconify-icon icon="fontisto:wind" width="26"></iconify-icon>
                            <h3>7.3</h3>
                        </div>
                        <div className='item_detail'>
                            <iconify-icon icon="fontisto:wind" width="26"></iconify-icon>
                            <h3>7.3</h3>
                        </div>
                    </div>
                </div>
                <div className='forecast_icon'>

                </div>
            </div>
        </div>
     );
}
 
export default SingleForecast;