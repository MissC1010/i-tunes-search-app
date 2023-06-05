import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Search from "./SearchForm";

test("renders search form", () => {
  render(<Search />);
  expect(
    screen.getByPlaceholderText("Search for content...")
  ).toBeInTheDocument();

  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("snapshot", () => {
  const { asFragment } = render(<Search />);
  expect(asFragment()).toMatchSnapshot();
});
