import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Temperature = ({ temperature }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component='span' sx={{ pr: 1 }}>
        {temperature?.Value}
      </Typography>
      <Typography component='span'>{temperature?.Unit}</Typography>
    </Box>
  );
};

export default Temperature;
