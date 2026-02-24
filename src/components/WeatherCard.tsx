import React from 'react';
import { WeatherData } from '../types';

interface WeatherCardProps {
    data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
    return (
        <div className="weather-card">
            <h2>{data.name}, {data.sys.country}</h2>

            <div className="weather-main">
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                />
                <h3>{Math.round(data.main.temp)}°</h3>
            </div>

            <p className="weather-description">{data.weather[0].description}</p>

            <div className="weather-details">
                <div className="weather-detail-item">
                    <span className="weather-detail-label">Sensación térmica</span>
                    <div className="weather-detail-value">{Math.round(data.main.feels_like)}°C</div>
                </div>

                <div className="weather-detail-item">
                    <span className="weather-detail-label">Humedad</span>
                    <div className="weather-detail-value">{data.main.humidity}%</div>
                </div>

                <div className="weather-detail-item">
                    <span className="weather-detail-label">Velocidad del viento</span>
                    <div className="weather-detail-value">{data.wind.speed} m/s</div>
                </div>

                <div className="weather-detail-item">
                    <span className="weather-detail-label">Temperatura mín/máx</span>
                    <div className="weather-detail-value">
                        {Math.round(data.main.temp_min)}° / {Math.round(data.main.temp_max)}°
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;