import { useContext } from "react";
import { SuccessBookingsCard } from "../../components/cards/SuccessBookingsCard";
import { AppOverlay } from "../../components/common/AppOverlay";
import { AppSidebar } from "../../components/common/AppSidebar";
import { FlightBookingsTable } from "../../components/tables";
import { getTotalFlightBookings } from "../../helpers/appHelpers";
import { SidebarContext } from "../../providers/SidebarProvider";
import { OverlayContext } from "../../providers/OverlayProvider";
import { MessageContainer } from "../../components/containers/MessageContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppReduxState } from "../../@types/appReduxTypes";
import { FlightBooking } from "../../@types/appTypes";
import "./FlightBookingsPage.scss";

export const FlightBookingsPage = () => {
  const flightBookings = useSelector<AppReduxState>(
    (state) => state.bookings.flightBookings
  ) as FlightBooking[];
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const { showOverlay } = useContext(OverlayContext);
  const total = getTotalFlightBookings(flightBookings);
  const handleOpenSidebar = () => setShowSidebar(true);

  return (
    <main className="flight-bookings-page">
      <h1 className="flight-bookings-page__title">Mis reservaciones</h1>
      <div className="flight-bookings-page__content">
        {flightBookings?.length > 0 ? (
          <>
            <FlightBookingsTable flightBookings={flightBookings} />
            <div className="flight-bookings-page__actions">
              <button
                className="flight-bookings-page__button"
                onClick={handleOpenSidebar}
              >
                ¡Realice sus reservaciones aquí! <strong>(${total})</strong>
              </button>
            </div>
            {showOverlay ? (
              <AppOverlay showOverlay={showOverlay}>
                <SuccessBookingsCard />
              </AppOverlay>
            ) : null}
            {showSidebar ? <AppSidebar /> : null}
          </>
        ) : (
          <MessageContainer
            type="info"
            message="No hay reservaciones registradas. Por favor, puede retornar a la página de 'vuelos' y reservar alguno."
          >
            <Link className="flight-bookings-page__link" to="/flights">
              Retornar a la página de vuelos.
            </Link>
          </MessageContainer>
        )}
      </div>
    </main>
  );
};
