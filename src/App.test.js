import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  const app = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };
  it("renders without errors", () => {
    app();
  });
  it("has a heading", () => {
    app();
    const heading = screen.getByRole("heading", {
      name: /home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
