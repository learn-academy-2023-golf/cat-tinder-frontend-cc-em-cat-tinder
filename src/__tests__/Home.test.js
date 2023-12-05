import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  const home = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };
  it("renders without errors", () => {
    home();
  });
  it("has a heading", () => {
    home();
    const heading = screen.getByRole("heading", {
      name: /home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
