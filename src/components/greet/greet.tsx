import React from "react";
import {GreetProps} from "./greet.types"

const Greet = (Props : GreetProps) => {
  return <div>Hello {Props.name ? Props.name : "Guest"}</div>;
};

export default Greet;

// code coverage is metric that a soft ware code is testd
// watchAll for testing all file 
// collectCoverageFrom for a path we want to coverage
// using threshold for coverage 