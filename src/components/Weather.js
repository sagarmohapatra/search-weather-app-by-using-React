import React, { useState, useEffect } from "react";
import "./css/Weather.css"


let Weather = () => {
    let [city, setcity] = useState(null)
    let [search, setsearch] = useState("pune")

    useEffect(() => {

        let fetchApi = async () => {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93984176a8499deeb90a66d98bea0a5d`
            let response = await fetch(url);
            let resJson = await response.json();
            // console.log(rejson);
            setcity(resJson.main);
        };
        fetchApi();

    }, [search])

    return (
        <React.Fragment>
            <div className="box">
                <div className="inputData">
                    <input className="inputFeild"
                        value={search}
                        type="search"
                        onChange={(e) => {
                            setsearch(e.target.value)
                        }} />
                </div>


                {!city ? (
                    <p className="errorMsg">no Data found</p>) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i class="fa fa-street-view "></i> {search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">{city.temp_min}°Cel | max : {city.temp_max}°Cel</h3>
                        </div>
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )}
            </div>



        </React.Fragment>
    )
}
export default Weather;