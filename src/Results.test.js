import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "./SearchResults";
import React from "react";

test("renders results", () => {
  const results = [{ trackId: 1, trackName: "Test Track" }];
  render(<Results results={results} />);
  expect(screen.getByText("Test Track")).toBeInTheDocument();
});
