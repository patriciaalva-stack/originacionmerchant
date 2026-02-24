# Weather App ☀️🌧️

Aplicación del clima moderna construida con React y TypeScript que permite buscar información meteorológica de cualquier ciudad del mundo usando la API de OpenWeatherMap.

## ✨ Características

- Buscar clima por nombre de ciudad
- Mostrar temperatura actual, sensación térmica, humedad y velocidad del viento
- Información de temperaturas mínimas y máximas
- Iconos animados del clima
- Diseño responsive y moderno
- Interfaz en español

## Project Structure

```
weather-app
├── src
│   ├── index.tsx          # Entry point of the application
│   ├── App.tsx            # Main App component
│   ├── components          # Reusable components
│   │   ├── WeatherCard.tsx # Component to display weather information
│   │   └── SearchBar.tsx   # Component for location input
│   ├── pages              # Application pages
│   │   └── Home.tsx       # Main page integrating components
│   ├── services           # API interaction
│   │   └── weatherApi.ts   # Functions to fetch weather data
│   ├── hooks              # Custom hooks
│   │   └── useWeather.ts   # Hook for managing weather data
│   ├── styles             # CSS styles
│   │   └── globals.css     # Global styles
│   └── types              # TypeScript types
│       └── index.ts        # Interfaces and types
├── public
│   └── index.html         # Main HTML template
├── package.json           # npm configuration
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## 🚀 Instalación

1. Clona este repositorio (o ya estás en el directorio correcto):
   ```bash
   cd weather-app
   ```

2. Las dependencias ya están instaladas. Si necesitas reinstalarlas:
   ```bash
   npm install
   ```

3. **Configura tu API Key** (IMPORTANTE):
   - Ve a [OpenWeatherMap](https://openweathermap.org/api) y crea una cuenta gratuita
   - Obtén tu API key desde tu panel de control
   - Abre el archivo [.env](.env) en la raíz del proyecto
   - Agrega tu API key:
     ```
     REACT_APP_WEATHER_API_KEY=tu_api_key_aqui
     ```

## 💻 Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

Esto abrirá la aplicación en [http://localhost:3000](http://localhost:3000) en tu navegador.

Para crear una versión de producción:

```bash
npm run build
```

## 📁 Estructura del Proyecto

- [src/components/](src/components/) - Componentes reutilizables (WeatherCard, SearchBar)
- [src/pages/](src/pages/) - Páginas de la aplicación
- [src/services/](src/services/) - Servicios para llamadas a la API
- [src/hooks/](src/hooks/) - Custom hooks de React
- [src/types/](src/types/) - Definiciones de tipos TypeScript
- [src/styles/](src/styles/) - Estilos CSS globales

## 🛠️ Tecnologías Utilizadas

- React 17
- TypeScript
- Axios para llamadas HTTP
- OpenWeatherMap API
- CSS3 con diseño responsive

## 📝 Notas

- La API key está configurada para usar unidades métricas (Celsius)
- El idioma de las respuestas está configurado en español
- La aplicación es completamente responsive y funciona en dispositivos móviles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Puedes enviar issues o pull requests para mejoras o corrección de errores.