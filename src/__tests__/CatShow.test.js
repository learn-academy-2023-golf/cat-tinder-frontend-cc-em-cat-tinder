import { render, screen } from "@testing-library/react";
import CatShow from "../pages/CatShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockCats from "../mockCats";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="catshow/:id" element={<CatShow cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<CatShow />", () => {
  it("renders cat enjoys", () => {
    renderShow();
    expect(
      screen.getByText(`I enjoy ${mockCats[0].enjoys}`)
    ).toBeInTheDocument();
  });
  it("contains an image", () => {
    renderShow();
    expect(
      screen.getByAltText(`${mockCats[0].name} photo`)
    ).toBeInTheDocument();
  });
  it("renders cat description", () => {
    renderShow();
    expect(
      screen.getByText(`I am ${mockCats[0].name}, age ${mockCats[0].age}.`)
    ).toBeInTheDocument();
  });
  it("has a link to edit", () => {
    renderShow();
    expect(
      screen.getByRole("link", { name: /edit cat profile/i })
    ).toBeInTheDocument();
  });
});
