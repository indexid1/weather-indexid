import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { convertTemperature } from '../../utils/utils';
import { useSelector } from 'react-redux';

const ForecastDaily = dayData => {
  const { isCelcius } = useSelector(state => state.global);

  const showTemperatureValue = () => {
    if (isCelcius) {
      return convertTemperature(isCelcius, dayData.dayData.temperature);
    } else {
      return dayData.dayData.temperature;
    }
  };

  const showTemperatureUnit = () => {
    if (isCelcius) {
      return 'C';
    } else {
      return 'F';
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        width: 150,
        height: 100,
        m: 1,
      }}
    >
      <Typography>{dayData.dayData.date}</Typography>
      <Typography sx={{ textAlign: 'center' }}>
        {dayData.dayData.dayWeather}
      </Typography>
      <Typography>
        <span>{showTemperatureValue()}</span>
        <span>{showTemperatureUnit()}</span>
      </Typography>
    </Card>
  );
};

export default ForecastDaily;
