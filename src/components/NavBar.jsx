import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">🌎Home</NavLink>
          <NavLink to="/spacecrafts">🚀Spacecrafts</NavLink>
          <NavLink to="/planets">🪐Planets</NavLink>
        </nav>
      </header>
    </div>
  );
};
