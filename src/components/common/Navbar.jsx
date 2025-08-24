import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DACODE</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Case</a>
        </li>
        <li>
          <a href="#">Decode Specialistes</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div>
        <button>Request a Quote</button>
      </div>
    </nav>
  );
};
export default Navbar;
