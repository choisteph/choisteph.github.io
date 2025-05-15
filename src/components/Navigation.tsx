import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <span className="decoration">//</span>
      <NavLink to="/">home</NavLink>
      <span className="decoration">//</span>
      <NavLink to="/projects">featured projects</NavLink>
      <span className="decoration">//</span>
      <NavLink to="/about">about</NavLink>
      <span className="decoration">//</span>
    </nav>
  );
}
