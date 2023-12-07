import { render, screen } from "@testing-library/react";
import CatNew from "../pages/CatNew";
import { BrowserRouter } from "react-router-dom";

describe("<CatNew />", () => {
    beforeEach( () => {
        render(
            <BrowserRouter>
              <CatNew />
            </BrowserRouter>
          );
    });
        it("renders a Cat New Page", () => {
            const text = screen.getByText(/Add new cat/i)
            expect(text).toBeInTheDocument()
        })
})

  