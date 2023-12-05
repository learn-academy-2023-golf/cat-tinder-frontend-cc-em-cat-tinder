import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    // screen.logTestingPlaygroundURL();
  });

  it("displays 404 Not Found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const text = screen.getByText("404 Not Found");
    expect(text).toBeInTheDocument();
  });
});
