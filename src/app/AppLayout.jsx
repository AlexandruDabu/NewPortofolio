import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarPhone from "./NavBarPhone";

function AppLayout() {
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

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[])
    return (
        <>
            {isMobile && <NavBarPhone/>}
        <div className="SideBar">
            <SideBar/>
        </div>
            <div className="Content">
                <main>
                    {isMobile && (
                         <div className="selectedLink">
                         <h1>{currentLoc}</h1>
                         <hr/>
                       </div>
                    )}
                    {!isMobile && <NavBar/>}
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

export default AppLayout;