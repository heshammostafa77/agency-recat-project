import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DACODE</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/case">Case</NavLink>
        </li>
        <li>
          <NavLink to="/decodespecialistes">Decode Specialistes</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
      <div>
        <button>Request a Quote</button>
      </div>
    </nav>
  );
};
export default Navbar;
