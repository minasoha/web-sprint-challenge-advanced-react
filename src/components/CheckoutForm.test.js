import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, waitFor, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first Name:/i);
  userEvent.type(firstName, "Mina");

  const lastName = screen.getByLabelText(/last Name:/i);
  userEvent.type(lastName, "Soha");

  const address = screen.getByLabelText(/address:/i);
  userEvent.type(address, "123 smith road");

  const city = screen.getByLabelText(/city:/i);
  userEvent.type(city, "Davenport");

  const state = screen.getByLabelText(/state:/i);
  userEvent.type(state, "FL");

  const zip = screen.getByLabelText(/zip:/i);
  userEvent.type(zip, "12345");

  const button = screen.getByRole("button");
  userEvent.click(button);

  await waitFor(() => {
    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();

    const firstNameSubmit = screen.queryByText(/mina/i);
    expect(firstNameSubmit).toBeInTheDocument();

    const lastNameSubmit = screen.queryByText(/soha/i);
    expect(lastNameSubmit).toBeInTheDocument();

    const addressSubmit = screen.queryByText(/123 smith road/i);
    expect(addressSubmit).toBeInTheDocument();

    const citySubmit = screen.queryByText(/davenport/i);
    expect(citySubmit).toBeInTheDocument();

    const stateSubmit = screen.queryByText(/fl/i);
    expect(stateSubmit).toBeInTheDocument();

    const zipSubmit = screen.queryByText(/12345/i);
    expect(zipSubmit).toBeInTheDocument();
  });
});
