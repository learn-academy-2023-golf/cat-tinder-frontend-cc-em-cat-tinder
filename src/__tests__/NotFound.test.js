import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  const notfound = () => {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };
  it("renders without errors", () => {
    notfound();
  });
  it("displays 404 Not Found", () => {
    notfound();
    const text = screen.getByText("404 Not Found");
    expect(text).toBeInTheDocument();
  });
});
