import { useContext } from "react";
import { useDispatch } from "react-redux";
import { OverlayContext } from "../../../providers/OverlayProvider";
import { clearFlightBookings } from "../../../redux/actions/flightBookingsActions";
import { AirplaneBigIcon } from "../../icons/AirplaneBigIcon";
import "./SuccessBookingsCard.scss";

export const SuccessBookingsCard = () => {
  const dispatch = useDispatch();
  const { setShowOverlay } = useContext(OverlayContext);
  const handleCancel = () => {
    setShowOverlay(false);
    dispatch(clearFlightBookings());
  };

  return (
    <article className="success-transaction-card">
      <header className="success-transaction-card__header">
        <AirplaneBigIcon
          className="success-transaction-card__icon"
          width={30}
          height={30}
        />
      </header>
      <div className="success-transaction-card__body">
        <h3 className="success-transaction-card__title">
          ¡Gracias por tus reservas!
        </h3>
        <p className="success-transaction-card__description">
          La información se han guardado con éxito.
        </p>
      </div>
      <footer className="success-transaction-card__actions">
        <button
          className="success-transaction-card__button success-transaction-card__button--cancel"
          onClick={handleCancel}
        >
          Cerrar
        </button>
      </footer>
    </article>
  );
};
