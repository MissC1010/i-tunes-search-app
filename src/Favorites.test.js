import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Favorites from "./Favorites";
import React from "react";

test("renders favorites", () => {
  const favorites = [{ trackId: 1, trackName: "Test Track" }];
  render(<Favorites favorites={favorites} />);
  expect(screen.getByText("Test Track")).toBeInTheDocument();
});
