const weatherData = {
      current: {
        cloudcover: 75,
        feelslike: 5,
        humidity: 93,
        is_day: "no",
        observation_time: "05:37 AM",
        precip: 0,
        pressure: 1022,
        temperature: 7,
        uv_index: 0,
        visibility: 10,
        weather_code: 116,
        weather_descriptions: ["Partly cloudy"],
        weather_icons: ["https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"],
        wind_degree: 196,
        wind_dir: "SSW",
        wind_speed: 14
      },
      location: {
        country: "United Kingdom",
        lat: "51.517",
        localtime: "2025-02-23 05:37",
        localtime_epoch: 1740289020,
        lon: "-0.106",
        name: "London",
        region: "City of London, Greater London",
        timezone_id: "Europe/London",
        utc_offset: "0.0"
      },
      request: {
        language: "en",
        query: "London, United Kingdom",
        type: "City",
        unit: "m"
      }
    };
    
    // Example usage:
    console.log(weatherData.current.temperature); // Output: 7
    console.log(weatherData.location.name); // Output: London
    console.log(weatherData.current.weather_descriptions[0]); // Output: Partly cloudy
    