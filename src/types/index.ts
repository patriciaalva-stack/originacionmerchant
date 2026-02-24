export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
    sys: {
        country: string;
    };
}

export interface Location {
    city: string;
    country: string;
}