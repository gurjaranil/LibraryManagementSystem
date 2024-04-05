import { useRef } from "react";
import "./Adminheadder.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Adminheader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        

        <nav ref={navRef}>
          <h3>Admin Deshboard</h3>
       

          <Link onClick={showNavbar} to="/dashboard/users" className="nav-element">
            <p>All Users</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard/seeallbook" className="nav-element">
            <p>All Book List</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard/addbook" className="nav-element">
            <p>Add book</p>
          </Link>
          <Link onClick={showNavbar} to="/dashboard/serachbook" className="nav-element">
            <p>Search book</p>
          </Link>


          <Link onClick={showNavbar} to="/dashboard/updatebook" className="nav-element">
            <p>Update Book</p>
          </Link>
          <Link onClick={showNavbar} to="/dashboard/seerequest" className="nav-element">
            <p>See  Requests</p>
          </Link>
          <Link onClick={showNavbar} to="/dashboard/issedbook" className="nav-element">
            <p>Issued Book List</p>
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

      {/* <h1 className="hii">Welcome </h1> */}
    </div>
  );
}

export default Adminheader;
