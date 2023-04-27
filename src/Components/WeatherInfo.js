import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const WeatherInfo = ({weather}) => {
    console.log(weather);
    let icon = weather?.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345, minWidth: 300, background: 'transparent', padding: '0.4rem', 
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'}}
                >
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{fontSize: '3rem', color: 'white', fontWeight: 600}}>
                        {Math.round(weather?.main.temp - 273.15)}
                        <sup>&deg;</sup>
                    </Typography>
                    <Typography sx={{fontSize: '1.7rem', textTransform: 'capitalize', color: 'white', fontWeight: 600}}>
                        {weather?.weather[0].description} <br></br>
                        <Typography sx={{textAlign: 'right', fontSize: '1.3rem', fontWeight: 600}}>{weather?.name}</Typography>
                    </Typography>
                </Box>

                <Box sx={{textAlign: 'center'}}>
                    <img style={{width: '90px'}} src={iconUrl} alt="w-img" />
                </Box>

                <CardContent>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography sx={{fontSize: '1.4rem', color: 'white'}}>Humidity: {weather?.main.humidity}</Typography>
                        <Typography sx={{fontSize: '1.4rem', color: 'white'}}>Wind Speed: {weather?.wind.speed}</Typography>
                        <Typography sx={{fontSize: '1.4rem', color: 'white'}}>Visibility: {weather?.visibility}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default WeatherInfo;