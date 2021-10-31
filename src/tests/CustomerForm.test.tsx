import { render } from "@testing-library/react";
import { CustomerForm } from "../components/forms/CustomerForm";

describe("Testing: CustomerForm", () => {
  test("renders CustomerForm", () => {
    const { getByPlaceholderText, getByText } = render(<CustomerForm />);
    const nameInput = getByPlaceholderText("Ingrese su nombres");
    const lastnameInput = getByPlaceholderText("Ingrese sus apellidos");
    const emailInput = getByPlaceholderText("Ingrese su correo electrónico");
    const addressInput = getByPlaceholderText("Ingrese su dirección");
    const flightBookingBtn = getByText("Reservar");

    expect(nameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(flightBookingBtn).toBeInTheDocument();
  });
});
