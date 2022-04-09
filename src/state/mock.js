export const mockCityData = {
  data: [
    {
      EpochTime: 1648883280,
      HasPrecipitation: false,
      IsDayTime: true,
      Link: 'http://www.accuweather.com/en/il/netanya/212474/current-weather/212474?lang=en-us',
      LocalObservationDateTime: '2022-04-02T10:08:00+03:00',
      MobileLink:
        'http://www.accuweather.com/en/il/netanya/212474/current-weather/212474?lang=en-us',
      PrecipitationType: null,
      Temperature: {
        Imperial: {
          Unit: 'F',
          UnitType: 18,
          Value: 70,
        },
        Metric: {
          Unit: 'C',
          UnitType: 17,
          Value: 21,
        },
      },
      WeatherIcon: 6,
      WeatherText: 'Mostly cloudy',
    },
  ],
};

export const mockAutoComplete = {
  data: [
    {
      Version: 1,
      Key: '212474',
      Type: 'City',
      Rank: 45,
      LocalizedName: 'Netanya',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
      },
      AdministrativeArea: {
        ID: 'M',
        LocalizedName: 'Central District',
      },
    },
    {
      Version: 1,
      Key: '174510',
      Type: 'City',
      Rank: 53,
      LocalizedName: 'Nettetal',
      Country: {
        ID: 'DE',
        LocalizedName: 'Germany',
      },
      AdministrativeArea: {
        ID: 'NW',
        LocalizedName: 'North Rhine-Westphalia',
      },
    },
    {
      Version: 1,
      Key: '27886',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Netrokona',
      Country: {
        ID: 'BD',
        LocalizedName: 'Bangladesh',
      },
      AdministrativeArea: {
        ID: 'C',
        LocalizedName: 'Dhaka',
      },
    },
    {
      Version: 1,
      Key: '213397',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Nettuno',
      Country: {
        ID: 'IT',
        LocalizedName: 'Italy',
      },
      AdministrativeArea: {
        ID: '62',
        LocalizedName: 'Lazio',
      },
    },
    {
      Version: 1,
      Key: '324060',
      Type: 'City',
      Rank: 55,
      LocalizedName: 'Netishyn',
      Country: {
        ID: 'UA',
        LocalizedName: 'Ukraine',
      },
      AdministrativeArea: {
        ID: '68',
        LocalizedName: "Khmel'nyts'kyy",
      },
    },
    {
      Version: 1,
      Key: '170459',
      Type: 'City',
      Rank: 63,
      LocalizedName: 'Netphen',
      Country: {
        ID: 'DE',
        LocalizedName: 'Germany',
      },
      AdministrativeArea: {
        ID: 'NW',
        LocalizedName: 'North Rhine-Westphalia',
      },
    },
    {
      Version: 1,
      Key: '3588326',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Netaji Nagar',
      Country: {
        ID: 'IN',
        LocalizedName: 'India',
      },
      AdministrativeArea: {
        ID: 'DL',
        LocalizedName: 'Delhi',
      },
    },
    {
      Version: 1,
      Key: '197763',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Netrang',
      Country: {
        ID: 'IN',
        LocalizedName: 'India',
      },
      AdministrativeArea: {
        ID: 'GJ',
        LocalizedName: 'Gujarat',
      },
    },
    {
      Version: 1,
      Key: '244499',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Netia',
      Country: {
        ID: 'MZ',
        LocalizedName: 'Mozambique',
      },
      AdministrativeArea: {
        ID: 'N',
        LocalizedName: 'Nampula',
      },
    },
    {
      Version: 1,
      Key: '174587',
      Type: 'City',
      Rank: 73,
      LocalizedName: 'Nettersheim',
      Country: {
        ID: 'DE',
        LocalizedName: 'Germany',
      },
      AdministrativeArea: {
        ID: 'NW',
        LocalizedName: 'North Rhine-Westphalia',
      },
    },
  ],
};

export const mockCitySearch = {
  data: [
    {
      Version: 1,
      Key: '212474',
      Type: 'City',
      Rank: 45,
      LocalizedName: 'Netanya',
      EnglishName: 'Netanya',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East',
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel',
      },
      AdministrativeArea: {
        ID: 'M',
        LocalizedName: 'Central District',
        EnglishName: 'Central District',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL',
      },
      TimeZone: {
        Code: 'IDT',
        Name: 'Asia/Jerusalem',
        GmtOffset: 3,
        IsDaylightSaving: true,
        NextOffsetChange: '2022-10-29T23:00:00Z',
      },
      GeoPosition: {
        Latitude: 32.329,
        Longitude: 34.857,
        Elevation: {
          Metric: {
            Value: 47,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 154,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
      ],
    },
  ],
};

export const mockForecast = {
  data: {
    Headline: {
      EffectiveDate: '2022-04-03T08:00:00+03:00',
      EffectiveEpochDate: 1648962000,
      Severity: 4,
      Text: 'Pleasant Sunday',
      Category: 'mild',
      EndDate: null,
      EndEpochDate: null,
      MobileLink:
        'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2022-04-02T07:00:00+03:00',
        EpochDate: 1648872000,
        Temperature: {
          Minimum: {
            Value: 61,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 84,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=1&lang=en-us',
      },
      {
        Date: '2022-04-03T07:00:00+03:00',
        EpochDate: 1648958400,
        Temperature: {
          Minimum: {
            Value: 60,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 69,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=2&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=2&lang=en-us',
      },
      {
        Date: '2022-04-04T07:00:00+03:00',
        EpochDate: 1649044800,
        Temperature: {
          Minimum: {
            Value: 63,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 74,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=3&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=3&lang=en-us',
      },
      {
        Date: '2022-04-05T07:00:00+03:00',
        EpochDate: 1649131200,
        Temperature: {
          Minimum: {
            Value: 63,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 84,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=4&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=4&lang=en-us',
      },
      {
        Date: '2022-04-06T07:00:00+03:00',
        EpochDate: 1649217600,
        Temperature: {
          Minimum: {
            Value: 65,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 81,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=5&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/netanya/212474/daily-weather-forecast/212474?day=5&lang=en-us',
      },
    ],
  },
};
