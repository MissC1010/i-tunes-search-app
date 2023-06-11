import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("renders main components", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText("Music App")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument(); // Change this line
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});
