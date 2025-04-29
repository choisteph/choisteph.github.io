import { Link } from "react-router-dom";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <span>//</span>
      <Link to="/">home</Link>
      <span>//</span>
      <Link to="/projects">projects</Link>
      <span>//</span>
      <Link to="/about">about</Link>
      <span>//</span>
    </nav>
  );
}
