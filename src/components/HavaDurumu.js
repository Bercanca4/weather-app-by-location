import React from "react";

function HavaDurumu(props) {
  console.log(props);
  const { weather } = props;
  return (
    <div className="rounded-xl border-2 border-black p-4 ">
      <h1 className="text-[33px] font-semibold p-4 ">
        Hava Durumu Uygulaması{" "}
      </h1>
      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <label className="text-white">Bulunduğun Bölge : {weather.name}</label>
      </div>
      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <label className="text-white">
          Hava Durumu :{" "}
          {weather.weather.map((data) => data.description).join(",")}
        </label>
      </div>
      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        {" "}
        <label className="text-white">
          Bulunduğun Kordinat (lat/Enlem): {weather.coord.lat}
        </label>
      </div>
      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        {" "}
        <label className="text-white">
          Bulunduğun Kordinat (long/Boylam): {weather.coord.lon}
        </label>
      </div>
      <div className="p-4 border rounded-xl my-4  bg-gradient-to-r from-cyan-500 to-blue-500">
        <label className="text-white">{weather.main.temp} °C </label>
      </div>

      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        {" "}
        <label className="text-white">
          Bulunduğunuz Ülke Kodu : {weather.sys.country}
        </label>
      </div>
      <div className="p-4 border rounded-xl my-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <label className="text-white">
          Tarih : {new Date(weather.dt * 1000).toLocaleDateString()}
        </label>
      </div>
      <div></div>
    </div>
  );
}

export default HavaDurumu;
