import { useLocation, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <Container
      sx={{
        bgcolor: '#cfe8fc',
        height: {
          xs: 128,
          sm: 80,
        },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'space-between' },
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
      maxWidth='false'
    >
      <Box>
        <Typography
          variant='h3'
          component='div'
          sx={{ pt: { xs: 2, sm: 0 }, fontSize: { xs: '36px', sm: '48px' } }}
        >
          Weather App
        </Typography>
      </Box>
      <Box sx={{ mt: { xs: 2, sm: 0 }, mb: { xs: 2, sm: 0 } }}>
        <Button
          variant={location.pathname === '/home' ? 'contained' : 'outlined'}
          onClick={handleHomeClick}
          sx={{ mr: 2 }}
        >
          Home
        </Button>
        <Button
          variant={
            location.pathname === '/favorites' ? 'contained' : 'outlined'
          }
          onClick={handleFavoritesClick}
        >
          Favorites
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
