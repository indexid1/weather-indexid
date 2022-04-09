import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import AutoComplete from '../components/AutoComplete/AutoComplete';
import CityWeather from '../components/CityWeather/CityWeather';
import SnackBar from '../components/SnackBar/SnackBar';
import ForecastList from '../components/Forecast/ForecastList';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ToggleTemperatureUnit from '../components/ToggleTemperatureUnit/ToggleTemperatureUnit';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { REACT_APP_TEL_AVIV_CITY_KEY } from '../services/api';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 737,
      md: 960,
      lg: 1103,
      xl: 1920,
    },
  },
});

const Home = () => {
  const { currentCity, forecast } = useSelector(state => state.location);
  const { favorites } = useSelector(state => state.favorites);
  const { isCelcius, isError } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { getCityByKey, getForecast, toggleFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (state) {
      getCityByKey(state.cityKey, state.cityName);
      getForecast(state.cityKey);
    } else if (!currentCity?.cityKey) {
      getCityByKey(REACT_APP_TEL_AVIV_CITY_KEY, 'Tel Aviv');
      getForecast(REACT_APP_TEL_AVIV_CITY_KEY);
    }
  }, []);

  const isAddedToFavorites = () => {
    return favorites?.some(
      favorite => favorite.cityName === currentCity.cityName
    );
  };

  const renderFavoriteIcon = () => {
    return isAddedToFavorites() ? (
      <FavoriteIcon sx={{ color: '#FFD700' }} />
    ) : (
      <FavoriteBorderOutlinedIcon />
    );
  };

  return (
    <Container sx={{ minWidth: 275 }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <AutoComplete />
      </Container>

      <ThemeProvider theme={theme}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            mt: 1,
            padding: '16px 9px',
            height: {
              xs: '100%',
              sm: 648,
              lg: 500,
            },
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column-reverse',
                sm: 'row',
              },
              alignItems: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              pb: 2,
              pt: 2,
              boxShadow: '0px 1px 6px #999',
            }}
          >
            <CityWeather
              city={currentCity}
              isCelcius={isCelcius}
              isFavorite={false}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {renderFavoriteIcon()}
                <Button
                  sx={{ width: 200 }}
                  variant='text'
                  onClick={() => toggleFavorites(currentCity)}
                >
                  {isAddedToFavorites()
                    ? 'Remove from Favorites'
                    : 'Add to Favorites'}
                </Button>
              </Box>
              <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                <ToggleTemperatureUnit />
              </Box>
            </Box>
          </Container>
          <ForecastList forecast={forecast} />
        </Card>
      </ThemeProvider>
      <SnackBar isError={isError} />
      <br />
    </Container>
  );
};

export default Home;
