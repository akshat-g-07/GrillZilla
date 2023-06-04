import CityRestaurant from "../json/CityRestaurant.json";

const CityFilter = ({ userCityValue }) => {
  const placesValues = [];

  CityRestaurant.forEach((item) => {
    item.city === userCityValue &&
      (() => {
        Object.values(item.places).forEach((place) => {
          placesValues.push(place);
        });
      })();
  });

  return placesValues;
};

export default CityFilter;
