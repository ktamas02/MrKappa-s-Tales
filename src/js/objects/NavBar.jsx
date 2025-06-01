import "../../css/NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <span className="nav-title">MrKappa&apos;s Tales</span>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
