import { FlightBookingsTableProps } from "../../@types/appPropTypes";
import { FlightBookingCard } from "../cards/FlightBookingCard";
import "./FlightBookingsTable.scss";

export const FlightBookingsTable = ({
  flightBookings = [],
}: FlightBookingsTableProps) => {
  if (flightBookings.length === 0) return <p>No flight bookings.</p>;

  return (
    <section className="flight-bookings-table">
      {flightBookings.map((flightBooking) => (
        <FlightBookingCard
          key={flightBooking.flightId}
          flightBooking={flightBooking}
        />
      ))}
    </section>
  );
};
