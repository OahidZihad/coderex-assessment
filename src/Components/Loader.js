import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Stack sx={{ color: 'white', height: '100vh', display: 'flex', alignItems: 'center' }} spacing={2} direction="row" justifyContent='center'>
            <CircularProgress color="inherit" />
        </Stack>
    );
};

export default Loader;