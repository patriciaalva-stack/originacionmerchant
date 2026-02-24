import axios from 'axios';
import { WeatherData } from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
    if (!API_KEY) {
        throw new Error('API key no configurada. Por favor configura REACT_APP_WEATHER_API_KEY en tu archivo .env');
    }

    try {
        const response = await axios.get<WeatherData>(BASE_URL, {
            params: {
                q: location,
                appid: API_KEY,
                units: 'metric',
                lang: 'es',
            },
        });
        return response.data;
    } catch (err) {
        // @ts-ignore
        if (err && err.response) {
            // @ts-ignore
            const status = err.response.status;
            if (status === 404) {
                throw new Error('Ciudad no encontrada. Intenta con otro nombre.');
            } else if (status === 401) {
                throw new Error('API key inválida. Verifica tu configuración.');
            }
        }
        throw new Error('Error al obtener datos del clima. Verifica tu conexión.');
    }
};