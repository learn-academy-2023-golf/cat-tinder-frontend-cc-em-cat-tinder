import { render, screen } from "@testing-library/react";
import CatEdit from "../pages/CatEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockCats from "../mockCats";

describe("<CatEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/catedit/1"]}>
        <Routes>
          <Route path="catedit/:id" element={<CatEdit cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders a Cat New Page", () => {
    const text = screen.getByText(/Edit a Cat/i);
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

  it("has a button called 'Submit Updated Cat'", () => {
    expect(
      screen.getByRole("button", {
        name: /submit updated cat/i,
      })
    ).toBeInTheDocument();
  });
});
