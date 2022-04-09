export const buildCity = response => {
  if (response.data && response.data[0]) {
    const resCity = response.data[0].Key;
    return {
      cityKey: resCity.Key,
      cityName: resCity.LocalizedName,
    };
  }
  return null;
};

export const getCityData = response => {
  if (response) {
    return response.data[0];
  }
  return null;
};

export const buildAutoComplete = response => {
  if (response) {
    return response.data.map(result => {
      return {
        cityKey: result.Key,
        cityName: result.LocalizedName,
      };
    });
  }
};

export const findByName = (cities, cityName) =>
  cities.find(city => city.cityName === cityName);

export const getDays = date => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = new Date(date);
  return days[day.getDay()];
};

export const buildForecast = (response, cityKey) => {
  if (response) {
    const forecastData = response.data.DailyForecasts;

    const forecastDataDisplay = forecastData.map(day => {
      return {
        date: getDays(day.Date),
        dayWeather: day.Day.IconPhrase,
        temperature: day.Temperature.Maximum.Value,
        unit: day.Temperature.Maximum.Unit,
        cityKey: cityKey,
      };
    });
    return forecastDataDisplay;
  }
};

export const convertTemperature = (isCelcius, value) => {
  if (isCelcius) {
    return Math.round((value - 32) / 1.8);
  } else {
    return value * 1.8 + 32;
  }
};
