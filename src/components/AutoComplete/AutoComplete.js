import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { findByName } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

export default function AutoComplete() {
  const { cityAutoComplete } = useSelector(state => state.location);
  const dispatch = useDispatch();
  const { getCityByKey, getAutoComplete, getForecast } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const isOnlyEnglish = value => {
    return /^[A-Za-z][A-Za-z]*$/.test(value);
  };

  const handleOnInputChange = e => {
    if (e.target.value) {
      getAutoComplete(e.target.value);
    }
  };

  const handleOnSelectCity = (e, value) => {
    const foundCity = findByName(cityAutoComplete, value);
    if (foundCity) {
      getCityByKey(foundCity.cityKey, value);
      getForecast(foundCity.cityKey);
    }
  };

  const createParams = params => {
    return {
      ...params,
      inputProps: {
        ...params.inputProps,
        value: params.inputProps.value.slice(
          0,
          params.inputProps.value.length - 1
        ),
      },
    };
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        onInputChange={handleOnInputChange}
        onChange={handleOnSelectCity}
        id='autocomplete'
        autoComplete
        options={cityAutoComplete.map(city => city.cityName)}
        renderInput={params => {
          if (isOnlyEnglish(params.inputProps.value)) {
            return <TextField {...params} label='Please enter city' />;
          } else {
            return (
              <TextField {...createParams(params)} label='Please enter city' />
            );
          }
        }}
      />
    </Stack>
  );
}
