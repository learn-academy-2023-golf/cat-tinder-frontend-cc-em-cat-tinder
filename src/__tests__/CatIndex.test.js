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
      const catAge = screen.getByText(`Age: ${catObject.age}`);
      const catPhoto = screen.getByAltText(`${catObject.name} photo`);
      expect(catName).toBeInTheDocument();
      expect(catAge).toBeInTheDocument();
      expect(catPhoto).toBeInTheDocument();
    });
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
