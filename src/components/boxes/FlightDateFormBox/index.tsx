import { FlightDateFormBoxProps } from "../../../@types/appPropTypes";
import { convertDateToStringTwo } from "../../../helpers/appHelpers";
import "./FlightDateFormBox.scss";

export const FlightDateFormBox = ({
  date,
  setDate,
  label = "",
  htmlFor = "",
}: FlightDateFormBoxProps) => {
  const today: Date = new Date();

  const handleFlightDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div className="flight-date-box">
      <label className="flight-date-box__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type="date"
        name={htmlFor}
        id={htmlFor}
        value={date.toISOString().split("T")[0]}
        className="flight-date-box__input"
        onChange={handleFlightDateChange}
        min={convertDateToStringTwo(today)}
        required
      />
    </div>
  );
};
