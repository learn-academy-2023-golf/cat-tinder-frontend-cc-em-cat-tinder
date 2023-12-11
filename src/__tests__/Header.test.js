import { render, screen } from "@testing-library/react";
import catLogo from "../assets/cat-logo.png";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  const header = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };
  it("has a header", () => {
    header();
  });
  it("has naviagtion", () => {
    header();
    const nav = screen.getByRole("naviagtion", {
      name: /navigation bar/i,
    });
    expect(nav).toBeInTheDocument();
  });
  it("has clickable links", () => {
    header();
    userEvent.click(screen.getByAltText("Cat Tinder logo"));
    expect(screen.getByRole("img")).toHaveAttribute("src", catLogo);
    userEvent.click(screen.getByText("Meet the Cats"));
    expect(screen.getByText("Meet the Cats")).toBeInTheDocument();
    userEvent.click(screen.getByText("Introduce Yourself"));
    expect(screen.getByText("Introduce Yourself")).toBeInTheDocument();
  });
  it("Links are the correct role", () => {
    header();
    const link = screen.getByRole('link', {
      name: /cat tinder logo/i
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/");
  });
});
