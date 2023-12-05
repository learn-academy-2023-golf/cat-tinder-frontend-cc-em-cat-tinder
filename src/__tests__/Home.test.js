import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // screen.logTestingPlaygroundURL();
  });

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading", {
      name: /home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
