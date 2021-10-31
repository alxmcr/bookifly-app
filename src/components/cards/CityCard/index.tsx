import { useSelector } from "react-redux";
import { CityCardProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { City } from "../../../@types/appTypes";
import { getCityFromContext } from "../../../helpers/appHelpers";
import "./CityCard.scss";

export const CityCard = ({ cityId }: CityCardProps) => {
  const cities = useSelector<AppReduxState>(
    (state) => state.cities.cities
  ) as City[];
  const city = getCityFromContext(cityId, cities);

  return (
    <article className="city">
      <h3 className="city__name">{city?.name}</h3>
      <p className="city__country">{city?.country}</p>
    </article>
  );
};
