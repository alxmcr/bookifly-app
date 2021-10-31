import { FlightCitySelectBoxProps } from "../../../@types/appPropTypes";
import { MessageContainer } from "../../containers/MessageContainer";
import { CitiesSelect } from "../../selects/CitiesSelect";
import "./FlightCitySelectBox.scss";

export const FlightCitySelectBox = ({
  cityId = 0,
  setCityId,
  label = "",
  htmlFor = "",
  cities = [],
}: FlightCitySelectBoxProps) => {
  if (cities?.length === 0) {
    return (
      <MessageContainer type="info" message="No hay ciudades registradas." />
    );
  }

  return (
    <div className="flight-city-box">
      <label className="flight-city-box__label" htmlFor={htmlFor}>
        {label}
      </label>
      <CitiesSelect
        id={htmlFor}
        cities={cities}
        cityId={cityId}
        setCityId={setCityId}
      />
    </div>
  );
};
