import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import Button from '@mui/material/Button';

const ToggleTemperatureUnit = () => {
  const dispatch = useDispatch();
  const { isCelcius } = useSelector(state => state.global);

  const { toggleTempratureType } = bindActionCreators(actionCreators, dispatch);

  const handleChangeTempUnit = () => {
    toggleTempratureType();
  };

  const showToggleUnit = () => {
    if (isCelcius) {
      return 'Show temperature in F';
    } else {
      return 'Show temperature in C';
    }
  };

  return (
    <Button variant='outlined' onClick={handleChangeTempUnit}>
      {showToggleUnit()}
    </Button>
  );
};

export default ToggleTemperatureUnit;
