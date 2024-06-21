import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const [currentLoc, setCurrentLoc] = useState('About');

  useEffect(() => {
    const updateLocation = () => {
      const path = location.pathname.substring(1);
      if (path) {
        setCurrentLoc(path.charAt(0).toUpperCase() + path.slice(1));
      } else {
        setCurrentLoc('About');
      }
    };

    updateLocation();
  }, [location]);

    return(
        <>
        <nav>
            <div className="selectedLink">
            <h1>{currentLoc}</h1>
            <hr/>
            </div>
            <div className="nav-Links">
            <NavLink to='/about' activeClassName="active" className="nav-link">About</NavLink>
            <NavLink to='/resume' activeClassName="active" className="nav-link">Resume</NavLink>
            <NavLink to='/education' activeClassName="active" className="nav-link">Education</NavLink>
            <NavLink to='/projects' activeClassName="active" className="nav-link">Projects</NavLink>
            <NavLink to='/contact' activeClassName="active" className="nav-link">Contact</NavLink>
            </div>
        </nav>
        </>
    )
}

export default NavBar;