import { Link } from "react-router-dom";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <span className="decoration">//</span>
      <Link to="/">home</Link>
      <span className="decoration">//</span>
      <Link to="/projects">featured projects</Link>
      <span className="decoration">//</span>
      <Link to="/about">about</Link>
      <span className="decoration">//</span>
    </nav>
  );
}
