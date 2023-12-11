import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import catLogo from "../assets/cat-logo.png";

const Header = () => {
  return (
    <header role="naviagtion" aria-label="Navigation Bar">
      <Nav
        justified
        pills
        className="p-4 bg-secondary d-flex flex-column flex-md-row justify-content-center align-item-end gap-4 w-100 m-auto"
      >
        <NavItem>
          <NavLink className="text-white" to="/">
            <img
              style={{
                width: "4rem",
                borderRadius: "40px",
                border: "2px solid #000",
              }}
              src={catLogo}
              alt="Cat Tinder logo"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="header-logo text-white fs-4" to="/catindex">
            Cat Index
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="header-logo text-white fs-4" to="/catnew">
            Cat New
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
};

export default Header;
