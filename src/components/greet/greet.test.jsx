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

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

// describe("Nested", () => {
//   test("renders my name", () => {
//     render(<Greet name="Mamad" />);
//     const textElement = screen.getByText("Hello Mamad");
//     expect(textElement).toBeInTheDocument();
//   });
// });
//watch mode is a situation that shows all changing file for
//testing and if we commit the changes u after testing u don't see any thing
// and u should choose between options that are available
//filters in testing
// a means all
// o runs test only related to change files
// p filters by filename and u can  test a file u writes its regex
// t filters  by testname
// by .only after test u can just test a test u want and skip another one
// by . skip u do something opposite of . only

// using describe to test element by grouping them and it can be nested
// it and test both use for testing main body
// fit is equal to test.only
// xit is equal to test.skip
// test and it are same for coding test
// file with .test , .spec or u can make new folder __test__ and make filename-test.js ... for testing

// with assertion like toBeInDocument u can check the values meet certain conditions .
