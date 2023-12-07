import { render, screen } from "@testing-library/react";
import CatNew from "../pages/CatNew";
import { BrowserRouter } from "react-router-dom";

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    );
  });
  it("renders a Cat New Page", () => {
    const text = screen.getByText(/Add new cat/i);
    expect(text).toBeInTheDocument();
  });

  const arr = ["name", "age", "enjoys", "image"];

  it("has a form with entries for name, age, enjoys, and image", () => {
    arr.forEach((item) => {
      expect(
        screen.getByText(new RegExp("\\b" + item, "i")).getAttribute("for")
      ).toEqual(item);
    });
  });

  it("has a button called 'Submit'", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
