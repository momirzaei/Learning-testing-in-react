import { render, screen } from "@testing-library/react";
import MyCounter from "./myCounter";
import userEvent from "@testing-library/user-event";

describe("counter", () => {
  test("counter is working correctly", () => {
    render(<MyCounter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("render count of 0", () => {
    render(<MyCounter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("0");
  });
  // getting button , clicking once and adding 1 point to text
  // using userEvent

  //mouse interaction
  test("render count of 1", async () => {
    // create user event instance
    // user event added after version 14 so you should update userEvent library
    const user = userEvent.setup();
    render(<MyCounter />);
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  // keyboard interaction
  // getting input for input type number
  // then put value 10 to it
  // then click set btn
  // then check count value to have , value 10 in it
  test("render count to 10 after clicking button", async () => {
    const user = userEvent.setup();
    render(<MyCounter />);
    // for input type number role is spin button
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
  // test for pressing tab in keyboard
  test("elements are focused in right order", async () => {
    const user = userEvent.setup();
    render(<MyCounter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    // using tab for ordering after pressing the tab btn
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

//mouse interaction : click , dbclick , tripleclick , hover , unhover for mouse
// keyboard interaction : type , tab , clear , selectOptions , deselectOptions ,
// copy , cut , paste ,
