import stateCity from "../json/StateCity.json";

const LocationSearchFunction = ({ stateCityKey }) => {
  !stateCityKey && (stateCityKey = "");
  stateCityKey = stateCityKey.toUpperCase().trim();

  const filteredStateCity = [];

  stateCity.forEach((item) => {
    var stateValue = item.state.toUpperCase();
    var citiesValue = item.cities.map((city) => city.toUpperCase());
    var cityList = [];

    if (stateValue.includes(stateCityKey)) {
      filteredStateCity.push({ state: stateValue, cities: citiesValue });
    } else {
      citiesValue.forEach((city) => {
        if (city.includes(stateCityKey)) {
          cityList.push(city);
        }
      });
      cityList.length &&
        filteredStateCity.push({ state: stateValue, cities: cityList });
    }
  });

  return filteredStateCity;
};

export default LocationSearchFunction;
