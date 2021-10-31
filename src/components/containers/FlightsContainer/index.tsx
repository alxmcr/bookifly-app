import { FlightsContainerProps } from "../../../@types/appPropTypes";
import { useFlights } from "../../../hooks/useFlights";
import { AppSpinner } from "../../common/AppSpinner";
import { FlightsList } from "../../lists";
import { MessageContainer } from "../MessageContainer";
import "./FlightsContainer.scss";

export const FlightsContainer = ({
  departureDate,
  cityTo,
  cityFrom,
}: FlightsContainerProps) => {
  const { flights, loadingFlights, errorFlights } = useFlights(
    cityFrom,
    cityTo,
    departureDate
  );

  if (loadingFlights) return <AppSpinner color="primary" />;

  return (
    <section className="flights-container">
      {errorFlights ? (
        <MessageContainer
          type="error"
          message="Hubo un error al consultar los vuelos."
        />
      ) : null}
      {!loadingFlights && !errorFlights ? (
        <FlightsList flights={flights} />
      ) : null}
    </section>
  );
};
