// 1. import recipe search component
import RecipeSearch from "./RecipeSearch.js";
// 2. import testing library
import { render, screen } from "@testing-library/react";
// 3. import jest
import "@testing-library/jest-dom";

// write the test function and what it is testing in a clear message
test("RecipeSearch input-box displays on browser", function () {
  render(<RecipeSearch />);
  const element = screen.getByTestId("input");
  screen.debug(element);
  expect(element).toBeInTheDocument();
});

// test if the test is working properly before push it into the repo
