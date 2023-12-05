import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("has a footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    // screen.logTestingPlaygroundURL();
  });

  it("has copyright information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const copyright = screen.getByRole("contentinfo");
    expect(copyright).toBeInTheDocument();
    const footerText = screen.getByText(/© cat tinder \| 2023/i);
    expect(footerText).toBeInTheDocument();
  });
});
