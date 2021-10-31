import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { City, SearchFlight } from "../../../@types/appTypes";
import { searchFlightsActions } from "../../../redux/actions/searchFlightsActions";
import { FlightCitySelectBox } from "../../boxes/FlightCitySelectBox";
import { FlightDateFormBox } from "../../boxes/FlightDateFormBox";
import { FlightNroPassengersBox } from "../../boxes/FlightNroPassengersBox";
import { AppSpinner } from "../../common/AppSpinner";
import { MessageContainer } from "../../containers/MessageContainer";
import { SearchIcon } from "../../icons/SearchIcon";
import "./SearchFlightForm.scss";

export const SearchFlightForm = () => {
  const today: Date = new Date();
  const dispatch = useDispatch();
  const history = useHistory();
  const [cityFrom, setCityFrom] = useState<number>(1);
  const [cityTo, setCityTo] = useState<number>(2);
  const [passengers, setPassengers] = useState<number>(1);
  const [departureDate, setDepartureDate] = useState<Date>(today);
  const loadingCities = useSelector<AppReduxState>(
    (state) => state.cities.loading
  ) as boolean;
  const errorCities = useSelector<AppReduxState>(
    (state) => state.cities.error
  ) as boolean;
  const cities = useSelector<AppReduxState>(
    (state) => state.cities.cities
  ) as City[];

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchFlight: SearchFlight = {
      from: cityFrom,
      to: cityTo,
      date: new Date(departureDate),
      passengers,
    };
    dispatch(searchFlightsActions(searchFlight));
    history.push("/flights");
  };

  if (loadingCities) return <AppSpinner color="primary" />;
  if (errorCities) {
    return (
      <MessageContainer
        type="error"
        message="Hubo un inconveniente en cargar las ciudades. Por favor, vuelva a intentar"
      />
    );
  }

  if (cities?.length === 0) {
    return (
      <MessageContainer
        type="info"
        message="No hay ciudades registradas. Por favor, verifique su conexión."
      />
    );
  }

  return (
    <form className="search-flight-form" onSubmit={handleSearchForm}>
      <div className="search-flight-form__cities">
        <FlightCitySelectBox
          htmlFor="cityFrom"
          label="¿Dondé estas?"
          cityId={cityFrom}
          setCityId={setCityFrom}
          cities={cities}
        />
        <FlightCitySelectBox
          htmlFor="cityTo"
          label="¿Dondé quieres viajar?"
          cityId={cityTo}
          setCityId={setCityTo}
          cities={cities}
        />
      </div>
      <div className="search-flight-form__logistics">
        <FlightDateFormBox
          htmlFor="date"
          label="¿Cuando?"
          date={departureDate}
          setDate={setDepartureDate}
        />
        <FlightNroPassengersBox
          htmlFor="passengers"
          label="Nro. Personas"
          passengers={passengers}
          setPassengers={setPassengers}
        />
      </div>
      <div className="search-flight-form__actions">
        <button type="submit" className="search-flight-form__button">
          <SearchIcon
            className="search-flight-form__icon"
            width={15}
            height={15}
          />
          <span className="search-flight-form__text">Buscar un vuelo</span>
        </button>
      </div>
    </form>
  );
};
