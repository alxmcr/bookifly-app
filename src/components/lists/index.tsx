import { Link } from "react-router-dom";
import { FlightsListProps } from "../../@types/appPropTypes";
import { FlightCard } from "../cards/FlightCard";
import { MessageContainer } from "../containers/MessageContainer";
import "./FlightsList.scss";

export const FlightsList = ({ flights = [] }: FlightsListProps) => {
  return (
    <div className="flights-list">
      {flights.length > 0 ? (
        flights.map((flight) => (
          <FlightCard key={flight.flightId} flight={flight} />
        ))
      ) : (
        <MessageContainer
          type="info"
          message="No hay vuelos registrados en la fecha y/o destino. Pero, ¡Constantemente vamos añadiendo nuevas frecuencias de vuelo.! Por favor, retorné pronto 😃💛."
        />
      )}
    </div>
  );
};
