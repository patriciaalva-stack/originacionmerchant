import React from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import { useWeather } from '../hooks/useWeather';

const Home: React.FC = () => {
    const { weatherData, loading, error, fetchWeather } = useWeather();

    return (
        <>
            <header className="app-header">
                <h1>Clima</h1>
                <p className="app-subtitle">Consulta el estado del tiempo en cualquier ciudad del mundo</p>
            </header>

            <main className="main-container">
                <SearchBar onSearch={fetchWeather} loading={loading} />

                {error && (
                    <div className="error">
                        {error}
                    </div>
                )}

                {loading && (
                    <div className="loading">
                        <p>Cargando información del clima...</p>
                    </div>
                )}

                {weatherData && !loading && <WeatherCard data={weatherData} />}
            </main>

            <footer className="app-footer">
                <p>Datos proporcionados por OpenWeatherMap</p>
            </footer>
        </>
    );
};

export default Home;