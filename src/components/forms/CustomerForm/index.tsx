import { useContext, useEffect, useState } from "react";
import { OverlayContext } from "../../../providers/OverlayProvider";
import { SidebarContext } from "../../../providers/SidebarProvider";
import { SendIcon } from "../../icons/SendIcon";
import "./CustomerForm.scss";

export const CustomerForm = () => {
  const [allowedBooking, setAllowedBooking] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { setShowOverlay } = useContext(OverlayContext);
  const { setShowSidebar } = useContext(SidebarContext);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSidebar(false);
    setShowOverlay(true);
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setLastname("");
    setEmail("");
    setAddress("");
  };

  useEffect(() => {
    if (name && lastname && email && address) {
      setAllowedBooking(true);
    } else {
      setAllowedBooking(false);
    }
  }, [name, lastname, email, address]);

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <div className="customer-form__form-group">
        <label htmlFor="name">
          Nombres<span className="customer-form__required">*</span>
        </label>
        <input
          type="text"
          className="customer-form__input"
          id="name"
          name="name"
          placeholder="Ingrese su nombres"
          autoComplete="off"
          maxLength={30}
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="customer-form__form-group">
        <label htmlFor="name">
          Apellidos<span className="customer-form__required">*</span>
        </label>
        <input
          type="text"
          className="customer-form__input"
          id="lastname"
          name="lastname"
          placeholder="Ingrese sus apellidos"
          autoComplete="off"
          maxLength={30}
          value={lastname}
          onChange={handleLastnameChange}
          required
        />
      </div>
      <div className="customer-form__form-group">
        <label htmlFor="email">
          Email<span className="customer-form__required">*</span>
        </label>
        <input
          type="email"
          className="customer-form__input"
          id="email"
          name="email"
          placeholder="Ingrese su correo electrónico"
          autoComplete="off"
          maxLength={30}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="customer-form__form-group">
        <label htmlFor="address">
          Dirección<span className="customer-form__required">*</span>
        </label>
        <textarea
          className="customer-form__textarea"
          id="address"
          name="address"
          placeholder="Ingrese su dirección"
          autoComplete="off"
          cols={30}
          rows={2}
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <div className="customer-form__actions">
        <button
          type="submit"
          className="customer-form__button"
          disabled={!allowedBooking}
        >
          Reservar
          <SendIcon className="customer-form__icon" width={20} height={20} />
        </button>
      </div>
    </form>
  );
};
