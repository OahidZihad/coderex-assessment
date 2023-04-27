import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CityNCountry from './Components/CityNCountry';
import WeatherInfo from './Components/WeatherInfo';
import './App.css';
import Loader from './Components/Loader';

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(err=>{
        console.log(err.message)
        if(err.message === 'Request failed with status code 404'){
          setError(true);
        }
      })
  }, [city])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
        setWeather(null)
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  if (error) {
    return (
      <Typography sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        color: 'red'
      }}>
        City Name Not Found. Please Try Another.
      </Typography>
    );
  }

  return (
    <Container>
        <CityNCountry setCity={setCity} />
        {
          weather && <WeatherInfo weather={weather} />
        }
    </Container>
  );
}

export default App;
