// import { render, screen } from "@testing-library/react";
// import Greet from "./greet";

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// //test(name , fn , timeout)
// //name for identify test
// // function that contain what we want to test
// // timeout is optional and use before aborting the test and default value is 5 sec

// test("renders Greet correctly", () => {
//   render(<Greet />);
//   const expectedText = screen.getByText(/hello/i);
//   expect(expectedText).toBeInTheDocument();
// });
// //this is a test just like we have in app test

//use TDD in testing mean u write the test first and then write the test
// following codes to chek them with test that is written

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders correctly", () => {
  render(<Greet name="Mamad" />);
  const textElement = screen.getByText("Hello Mamad");
  expect(textElement).toBeInTheDocument();
});
