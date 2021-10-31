import { Route, Switch } from "react-router";
import { FlightBookingsPage } from "../pages/FlightBookingsPage";
import { FlightsPage } from "../pages/FlightsPage";
import { HomePage } from "../pages/HomePage";

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/flights" component={FlightsPage} />
      <Route path="/bookings" component={FlightBookingsPage} />
    </Switch>
  );
};
