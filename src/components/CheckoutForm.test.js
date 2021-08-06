import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
//Check that the Header is been rendered

  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/checkout form/i);
});


test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  //fill all the fields of the checkout form to be submit it
  const firstNameInput = screen.getByLabelText(/first name/i);
  userEvent.type(firstNameInput, "Johanna");

  const lastNameInput = screen.getByLabelText(/last name/i);
  userEvent.type(lastNameInput, "Rodriguez");

  const addressInput = screen.getByLabelText(/address/i);
  userEvent.type(addressInput, "asereje");

  const cityInput = screen.getByLabelText(/city/i);
  userEvent.type(cityInput, "chicago");

  const stateInput = screen.getByLabelText(/state/i);
  userEvent.type(stateInput, "des plaines");

  const zipInput = screen.getByLabelText(/zip/i);
  userEvent.type(zipInput, "60038");

  //Submit the form
  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  //Check that the response message is been rendered
  const successMessageText = screen.getByTestId("successMessage")
  expect(successMessageText).toHaveTextContent(
    "You have ordered some plants! Woo-hoo!"
  );

  //Check that the response data rendered match with the one put on the input fields 
  const firstNameDisplay = screen.queryByText(/Johanna/i);
  expect(firstNameDisplay).toBeInTheDocument();

  const lastNameDisplay = screen.queryByText(/Rodriguez/i);
  expect(lastNameDisplay).toBeInTheDocument();

  const addressDisplay = screen.queryByText(/asereje/i);
  expect(addressDisplay).toBeInTheDocument();

  const cityDisplay = screen.queryByText(/chicago/i);
  expect(cityDisplay).toBeInTheDocument();

  const stateDisplay = screen.queryByText(/des plaines/i);
  expect(stateDisplay).toBeInTheDocument();

  const zipDisplay = screen.queryByText(/60038/i);
  expect(zipDisplay).toBeInTheDocument();

  
 
});
