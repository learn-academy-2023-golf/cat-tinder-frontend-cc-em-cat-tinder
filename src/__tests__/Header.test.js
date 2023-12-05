import { render, screen } from "@testing-library/react";
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
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("Cat Index"));
    expect(screen.getByText("Cat Index")).toBeInTheDocument();
    userEvent.click(screen.getByText("Cat New"));
    expect(screen.getByText("Cat New")).toBeInTheDocument();
  });
  it("Links are the correct role", () => {
    header();
    const link = screen.getByRole("link", {
      name: /Home/i,
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/");
  });
});
