import { render, fireEvent } from "@testing-library/react";
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
    // Button disabled
    expect(flightBookingBtn).toBeDisabled();
  });

  test("fills customer form", () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(
      <CustomerForm />
    );
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

    fireEvent.change(nameInput, { target: { value: "Alejandro" } });
    fireEvent.change(lastnameInput, { target: { value: "Coca" } });
    fireEvent.change(emailInput, { target: { value: "alejandro@coca.com" } });
    fireEvent.change(addressInput, { target: { value: "Calle 123" } });
    const aleName = getByDisplayValue("Alejandro");
    const aleLastname = getByDisplayValue("Coca");
    const aleEmail = getByDisplayValue("alejandro@coca.com");  
    const aleStreet = getByDisplayValue("Calle 123");  
    expect(aleName).toBeInTheDocument();
    expect(aleLastname).toBeInTheDocument();
    expect(aleEmail).toBeInTheDocument();
    expect(aleStreet).toBeInTheDocument();
     // Button enabled
     expect(flightBookingBtn).toBeEnabled();
  });
});
