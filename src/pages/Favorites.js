import { useSelector } from 'react-redux';
import CityWeather from '../components/CityWeather/CityWeather';
import { Card } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Favorites = () => {
  const { favorites } = useSelector(state => state.favorites);
  const { isCelcius } = useSelector(state => state.global);

  const renderFavoritesLocations = () => {
    if (favorites.length === 0 || !favorites) {
      return <Typography>No locations were added</Typography>;
    } else {
      return favorites.map(singleFavorite => (
        <CityWeather
          city={singleFavorite}
          key={singleFavorite.cityKey}
          isCelcius={isCelcius}
          isFavorite={true}
        />
      ));
    }
  };

  return (
    <Container
      sx={{
        minWidth: 275,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 5,
        maxWidth: 1200,
        width: '100%',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100%',
          minHeight: 500,
          width: '100%',
          p: 3,
        }}
      >
        <Typography sx={{ mb: 2, fontSize: 24 }}>
          Your favorites locations
        </Typography>

        <Container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {renderFavoritesLocations()}
        </Container>
      </Card>
    </Container>
  );
};

export default Favorites;
