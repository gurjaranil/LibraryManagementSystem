import { useRef } from "react";
import "./Readerheader.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Readerheader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        

        <nav ref={navRef}>
            <h3>Reader Deshboard</h3>
          {/* <Link t onClick={showNavbar} o="/admin" className="nav-element">
            <p>Owner Deshboard</p>
          </Link> */}

          <Link onClick={showNavbar} to="/dashboard/allbook" className="nav-element">
            <p>All Book</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard/searchbook" className="nav-element">
            <p>Search Book</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard/bookissue" className="nav-element">
            <p>Book issue Request</p>
          </Link>


          
          

         

          {/* <Link to="/login" className="nav-element">
            <div className="signin_but">
              <p>Sign In</p>
            </div>
          </Link> */}

          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Readerheader;
