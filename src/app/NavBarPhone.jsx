import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBarPhone() {
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
  
  useEffect(() => {
    const contentDiv = document.querySelector('.Content');
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
    return (
        <div className="NavBarShow">
        <nav>
            <div className="nav-Links">
            <NavLink to='/about' activeClassName="active" className="nav-link">About</NavLink>
            <NavLink to='/resume' activeClassName="active" className="nav-link">Resume</NavLink>
            <NavLink to='/education' activeClassName="active" className="nav-link">Education</NavLink>
            <NavLink to='/projects' activeClassName="active" className="nav-link">Projects</NavLink>
            <NavLink to='/contact' activeClassName="active" className="nav-link">Contact</NavLink>
            </div>
        </nav>
        </div>
    )
}

export default NavBarPhone;