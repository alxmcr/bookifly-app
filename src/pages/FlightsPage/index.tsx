import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppReduxState } from "../../@types/appReduxTypes";
import { SearchFlight } from "../../@types/appTypes";
import { CitiesContainer } from "../../components/containers/CitiesContainer";
import { FlightsContainer } from "../../components/containers/FlightsContainer";
import "./FlightsPage.scss";

export const FlightsPage = () => {
  const searchFlight = useSelector<AppReduxState>(
    (state) => state.flights.searchFlight
  ) as SearchFlight;
  const { from, to, date } = searchFlight;

  return (
    <main className="flights-page">
      <h1 className="flights-page__title">Vuelos</h1>
      {to > 0 && from > 0 ? (
        <CitiesContainer fromCityId={from} toCityId={to} />
      ) : null}

      <FlightsContainer
        cityFrom={from}
        cityTo={to}
        departureDate={new Date(date)}
      />
      <Link className="flights-page__link" to="/">
        Retornar a la página de inicio y busqué otras opciones 🛩️🏝️.
      </Link>
    </main>
  );
};
