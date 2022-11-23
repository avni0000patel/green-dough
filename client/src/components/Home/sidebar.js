import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FiHome, FiLogOut } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import './sidebar.css';

function Sidebar() {

    const [activeIndex, setActiveIndex] = useState(() => {
        const initialIndex =
            window.location.pathname === '/' ? 0
                : window.location.pathname === '/login' ? 1
                    : window.location.pathname === 'signup' ? 2
                        : 0;
        return initialIndex;
    });

    return (
        <>
            <div className="sidebar" id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>Green Dough</p>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={activeIndex === 0} icon={<FiHome />} >
                                Home
                                <Link id="MenuItemHome" to="/" onClick={() => setActiveIndex(0)} />
                            </MenuItem>
                            <MenuItem active={activeIndex === 1} icon={<FiHome />} >
                                Login
                                <Link id="MenuItemLogin" to="/login" onClick={() => setActiveIndex(1)} />
                            </MenuItem>
                            <MenuItem active={activeIndex === 2} icon={<FiHome />}>
                                Signup
                                <Link id="MenuItemSignup" to="/signup" onClick={() => setActiveIndex(2)} />
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;