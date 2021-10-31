import { CitiesContainerProps } from "../../../@types/appPropTypes";
import { CityCard } from "../../cards/CityCard";
import { AirplaneBigIcon } from "../../icons/AirplaneBigIcon";
import "./CitiesContainer.scss";

export const CitiesContainer = ({
  fromCityId = 0,
  toCityId = 0,
}: CitiesContainerProps) => {
  return (
    <section className="cities-container">
      <CityCard cityId={fromCityId} />
      <p className="cities-container__separator">
        <AirplaneBigIcon className="cities-container__icon" width={30} height={30} />
      </p>
      <CityCard cityId={toCityId} />
    </section>
  );
};
