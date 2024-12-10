import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_Url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=patna&appid=0c9fd33a1e08396e49095c4de43ddf05`;
    await fetch(videoList_Url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const temperature = data;
  console.log(data);
  // let main = data.weather[0].main;
  return <></>;
};

export default Weather;
