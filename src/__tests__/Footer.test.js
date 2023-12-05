import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  const footer = () => {
    return render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };
  it("has a footer", () => {
    footer();
  });
  it("has copyright information", () => {
    footer();
    const copyright = screen.getByRole("contentinfo");
    expect(copyright).toBeInTheDocument();
    const footerText = screen.getByText(/© cat tinder \| 2023/i);
    expect(footerText).toBeInTheDocument();
  });
  it("has clickable links", () => {
    footer();
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
