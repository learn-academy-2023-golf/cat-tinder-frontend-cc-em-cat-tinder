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

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // screen.logTestingPlaygroundURL();
    const youtube = screen.getByRole("button", {
      name: /you tube/i,
    });
    expect(youtube).toBeInTheDocument();

    const twitter = screen.getByRole("button", {
      name: /twitter/i,
    });
    expect(twitter).toBeInTheDocument();

    const facebook = screen.getByRole("button", {
      name: /facebook/i,
    });
    expect(facebook).toBeInTheDocument();

    const tiktok = screen.getByRole("button", {
      name: /tiktok/i,
    });
    expect(tiktok).toBeInTheDocument();
  });
});
