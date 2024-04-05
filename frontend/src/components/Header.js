import { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "./logoxenon.jpg"

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <img
            className="header_logo"
            src=""
            alt="header_logo"
          />
        </Link>

        <nav ref={navRef}>
          <Link  onClick={showNavbar} to="/" className="nav-element">
            <p>Home</p>
          </Link>

          <Link onClick={showNavbar} to="/liblist" className="nav-element">
            <p>Available Libraries</p>
          </Link>

          <Link onClick={showNavbar} to="/libcreate" className="nav-element">
            <p>Create Library</p>
          </Link>

          <Link onClick={showNavbar} to="/requestaccess" className="nav-element">
            <p>Access Request</p>
          </Link>

         

          <Link to="/login" className="nav-element">
            <div className="signin_but">
              <p>Sign In</p>
            </div>
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Header;
