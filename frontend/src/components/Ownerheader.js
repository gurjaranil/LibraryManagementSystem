import { useRef } from "react";
import "./Ownerheader.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Ownerheader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        

        <nav ref={navRef}>
            <h3>Owner Deshboard</h3>
          {/* <Link t onClick={showNavbar} o="/admin" className="nav-element">
            <p>Owner Deshboard</p>
          </Link> */}

          <Link onClick={showNavbar} to="/dashboard/alluser" className="nav-element">
            <p>All Users</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard/adduser" className="nav-element">
            <p>Add Users</p>
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

export default Ownerheader;
