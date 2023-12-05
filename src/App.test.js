import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
        // screen.logTestingPlaygroundURL();
  });
  it("has a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading", {
      name: /home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
