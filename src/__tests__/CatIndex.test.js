import { render, screen } from "@testing-library/react";
import CatIndex from "../pages/CatIndex";
import { BrowserRouter } from "react-router-dom";
import mockCats from "../mockCats";

const catIndex = () => {
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats} />
    </BrowserRouter>
  );
};

describe("<CatIndex/>", () => {
  it("renders cat cards", () => {
    catIndex();

    mockCats.forEach((catObject) => {
      const catName = screen.getByText(catObject.name);
      expect(catName).toBeInTheDocument();
    });
  });
});
