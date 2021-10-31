import { CustomerFormCardProps } from "../../../@types/appPropTypes";
import { CustomerForm } from "../../forms/CustomerForm";
import "./CustomerFormCard.scss";

export const CustomerFormCard = ({ total = 0 }: CustomerFormCardProps) => {
  if (total === 0) return <p>No hay reservaciones.</p>;

  return (
    <article className="customer-form-card">
      <header className="customer-form-card__header">
        <p className="customer-form-card__total">${total}</p>
        <h1 className="customer-form-card__title">Datos del cliente</h1>
      </header>
      <CustomerForm />
    </article>
  );
};
