import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
    it("has a header", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
    })

    it("has clickable links", () => {
        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("Cat Index"))
        expect(screen.getByText("Cat Index")).toBeInTheDocument()
        userEvent.click(screen.getByText("Cat New"))
        expect(screen.getByText("Cat New")).toBeInTheDocument()

    })

    it("Links are the correct role", () => {
        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const link = screen.getByRole("link", {
            name: /Home/i
        })
        expect(link).toBeInTheDocument()
        expect(link.getAttribute('href')).toBe('/')

    } )
})