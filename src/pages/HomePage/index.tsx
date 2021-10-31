import { SearchFlightForm } from "../../components/forms/SearchFlightForm";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <main className="home-page">
      <p className="home-page__description">
        Viaja de forma segura, cómoda y rápida con Bookifly. Busca tu vuelo y
        reserva, ya!.
      </p>
      <SearchFlightForm />
    </main>
  );
};
