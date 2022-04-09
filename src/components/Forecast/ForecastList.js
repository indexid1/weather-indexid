import ForecastDaily from './ForecastDaily';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ForecastList = forecast => {
  return (
    <Container>
      <Typography sx={{ textAlign: 'center', fontSize: 24 }}>
        Weather forecast for 5 days
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {forecast.forecast.map((day, index) => (
          <ForecastDaily dayData={day} key={index} />
        ))}
      </Box>
    </Container>
  );
};

export default ForecastList;
