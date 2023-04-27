import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Loader from './Loader';

const CityNCountry = ({setCity}) => {
    const [country, setCountry] = useState();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGrid, setSelectedGrid] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://countriesnow.space/api/v0.1/countries')
        .then(response => {
            const data = response.data;
            setCountry(data)
            setLoading(false)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedGrid(true);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    if(loading){
        return (
            <Loader />
        )
    }

    return (
        <Box sx={{ width: '100%', margin: '50px 0' }}>
            <Grid
                container
                rowSpacing={2}
                direction="row"
                justifyContent="center"
            >
                {
                    selectedGrid ? (
                        <>
                            <Grid item xs={12} sm={6} sx={{ padding: '0 0.5rem' }}>
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Country</InputLabel>
                                    <Select sx={{color: 'white'}}
                                        label='Country'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={handleCountryChange}
                                    >
                                        {
                                            country && country?.data.map((ctr) => {
                                                return(
                                                    <MenuItem value={ctr.country}>{ctr.country}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={6} sx={{ padding: '0 0.5rem' }}>
                                <FormControl fullWidth>
                                    {selectedCountry && country && country?.data.map((country) => {
                                        if (country.country === selectedCountry) {
                                        return (
                                                <>
                                                    <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>City of {country.country}</InputLabel>
                                                    <Select sx={{color: 'white'}}
                                                        label='City'
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        onChange={handleCityChange}
                                                    >
                                                        {country.cities.map(city => {
                                                            return <MenuItem value={city}>{city}</MenuItem>
                                                        })}
                                                    </Select>
                                                </>
                                            )
                                        }
                                    })}
                                </FormControl>
                            </Grid>
                        </>
                    ) : (
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Country</InputLabel>
                                <Select sx={{color: 'white'}}
                                    label='Country'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleCountryChange}
                                >
                                    {
                                        country && country?.data.map((ctr) => {
                                            return(
                                                <MenuItem value={ctr.country}>{ctr.country}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default CityNCountry;