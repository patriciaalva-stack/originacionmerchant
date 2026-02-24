import { useState } from 'react';
import { fetchWeatherData } from '../services/weatherApi';
import { WeatherData } from '../types';

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (location: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherData(location);
            setWeatherData(data);
        } catch (err) {
            // @ts-ignore
            setError((err && err.message) || 'Error fetching weather data');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    return { weatherData, loading, error, fetchWeather };
};