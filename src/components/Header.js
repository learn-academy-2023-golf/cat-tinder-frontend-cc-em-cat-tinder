import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <header className="p-4 bg-secondary">
      <Nav justified pills>
        <NavItem>
          <NavLink className="text-white" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" to="/catindex">
            Cat Index
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" to="/catnew">
            Cat New
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
};

export default Header;
