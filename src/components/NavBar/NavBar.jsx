import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            🌎Home
          </NavLink>
          <NavLink
            to="/spacecrafts"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            🚀Spacecrafts
          </NavLink>
          <NavLink
            to="/planets"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            🪐Planets
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
