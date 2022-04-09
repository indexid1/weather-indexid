import { useState, useEffect } from 'react';
import Temperature from '../Temperature/Temperature';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CityWeather = ({ city, isCelcius, isFavorite }) => {
  const getTemperature = () => {
    if (city) {
      return isCelcius
        ? city?.Temperature?.Metric
        : city?.Temperature?.Imperial;
    }
    return null;
  };

  const [temperature, setTemperature] = useState(getTemperature());
  const navigate = useNavigate();

  useEffect(() => {
    if (city) setTemperature(getTemperature());
  }, [city, isCelcius]);

  const handleOnClick = city => {
    navigate('/home', { state: city });
  };

  const renderCirtyWeather = city => {
    if (isFavorite && city) {
      return (
        <Card
          onClick={() => handleOnClick(city)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 2,
            width: 150,
            height: 150,
            margin: 1,
            cursor: 'pointer',
          }}
        >
          <Typography component='div' sx={{ mb: 2, textAlign: 'center' }}>
            {city.cityName}
          </Typography>
          <Typography component='div' sx={{ mb: 2, textAlign: 'center' }}>
            {city.WeatherText}
          </Typography>
          <Temperature temperature={temperature} />
        </Card>
      );
    } else if (city) {
      return (
        <Card
          onClick={() => handleOnClick(city)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 2,
            width: 150,
            height: 100,
            margin: 1,
          }}
        >
          <Typography component='div' sx={{ mb: 2, textAlign: 'center' }}>
            {city.cityName}
          </Typography>
          <Typography component='div' sx={{ mb: 2, textAlign: 'center' }}>
            {city.WeatherText}
          </Typography>
          <Temperature temperature={temperature} />
        </Card>
      );
    } else {
      return null;
    }
  };

  return renderCirtyWeather(city);
};

export default CityWeather;
