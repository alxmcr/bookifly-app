import { FlightNroPassengersBoxProps } from "../../../@types/appPropTypes";
import "./FlightNroPassengersBox.scss";

export const FlightNroPassengersBox = ({
  passengers,
  setPassengers,
  label = "",
  htmlFor = "",
}: FlightNroPassengersBoxProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassengers(Number(e.target.value));
  };

  return (
    <div className="flight-passengers-box">
      <label className="flight-passengers-box__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type="number"
        name={htmlFor}
        id={htmlFor}
        value={passengers}
        className="flight-passengers-box__input"
        onChange={handleInputChange}
        min={1}
        max={40}
        required
      />
    </div>
  );
};
