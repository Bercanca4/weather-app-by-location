import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    const startInterval = setInterval(() => {
      if (loadingPercentage < 100) {
        setLoadingPercentage((prevPercentage) =>
          Math.min(prevPercentage + 5, 100)
        );
      } else {
        clearInterval(startInterval);
      }
    }, 100);

    const getWeatherData = async (lat, lon) => {
      setIsLoading(true);
      const lang = navigator.language.split("-")[0];
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a27b8c377fe0a62e25f92eff9a0f02e0&lang=${lang}&units=metric
          `
        );

        setWeather(data);
      } catch {
        alert("veri alınırken bir hata oluştu");
      } finally {
        setIsLoading(false);
        clearInterval(startInterval);
      }
    };

    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-3xl mb-4 text-black-600">
          Veriler çekiliyor lütfen bekleyin...
        </p>
        <div className="w-64 h-[25px]  flex items-center justify-start  bg-gray-200 rounded-full relative">
          <div
            id="loading-bar"
            className="h-[25px] bg-orange-600 rounded-full"
            style={{ width: `${loadingPercentage}%` }}>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              {loadingPercentage}%
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-24 h-24 mb-4 text-red-600"></div>
        <p className="text-2xl">Hava durumu verileri bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="w-[1200px] mx-auto h-screen  flex items-center justify-center">
      <HavaDurumu weather={weather} />
    </div>
  );
}

export default App;
