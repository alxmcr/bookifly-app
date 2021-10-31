import { CitiesSelectProps } from "../../../@types/appPropTypes";
import "./CitiesSelect.scss"

export const CitiesSelect = ({
  id = "",
  cities = [],
  cityId,
  setCityId,
}: CitiesSelectProps) => {
  const handleCityFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityId(Number(e.target.value));
  };

  return (
    <select
      className="cities-select"
      id={id}
      value={cityId}
      onChange={handleCityFromChange}
      required
    >
      {cities.map((city) => (
        <option
          className="cities-select__option"
          key={city.cityId}
          value={city.cityId}
        >
          {city.name}, {city.country}
        </option>
      ))}
    </select>
  );
};
