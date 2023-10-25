import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    // we can find role for each part using getByRole and
    // adding assertion for cheking it
    // we can find role for each item in testing-library.com\
    // https://www.w3.org/TR/html-aria/#docconformance
    // in the code we have 2 textbox , so we should
    // check which textbox we want by adding second argument
    // to getRoleBy
    const pageHeading = screen.getByRole("heading", {
      // name: "Job application form",
      // use object for heading because it is h1
      // so the level is 1
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      // the as above code h2 so the level is 2
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      // show item with label name we get from text box
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();
    const bioElement = screen.getByRole("textbox", {
      // show item with label name we get from text box
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // if we have text with the same name we can
    // use selector to choose item we have
    // for example Name , can be select or input
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "select",
    });
    expect(nameElement2.toBeInTheDocument);

    const termsElement2 = screen.getByLabelText("I agree");
    expect(termsElement2.toBeInTheDocument);

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    // p tag using getByText in testing
    const paragraphsElement = screen.getByText("All fields are mandatory");
    expect(paragraphsElement).toBeInTheDocument();

    //value can be test by getByDisplayValue
    const valueElement = screen.getByDisplayValue("mamad");
    expect(valueElement).toBeInTheDocument();

    // using getByAltText is used for parts thats
    // accepts alt like img area input
    const imageElement = screen.getByAltText("mamad is here");
    expect(imageElement).toBeInTheDocument();

    //using getByTitle for matching atr
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // getByTestId used for matching data-testid
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});

// we can use these items in getByRole for finding key
// name , level , hidden , selected , checked , pressed
// getByRole is the most important for usage of coding

// perferance of using queries (priority)
// getByRole , getByLabelText , getByPlaceholderText , getByText
// getByDisplayValue , getByAltText , getByTitle and testId this last items are not common

// after that we study all queris
