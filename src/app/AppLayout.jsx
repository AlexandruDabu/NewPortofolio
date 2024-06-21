import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
    return (
        <>
        <div className="SideBar">
            <SideBar/>
        </div>
            <div className="Content">
                <main>
                    <NavBar/>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

export default AppLayout;