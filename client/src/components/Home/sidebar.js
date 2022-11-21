import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import Auth from "../../utils/auth";
import "react-pro-sidebar/dist/css/styles.css";
import './sidebar.css';

export default function Sidenav() {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <Menu iconShape="square">
                        {Auth.loggedIn() ? (
                            <>
                                <SidebarContent>
                                    <Link to='/' style={{ textDecoration: 'none' }}>
                                        <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                                    </Link>
                                    <MenuItem icon={<BiCog />}>Settings</MenuItem>
                                </SidebarContent>
                                <SidebarFooter>
                                    <Menu iconShape="square">
                                        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                                    </Menu>
                                </SidebarFooter>
                            </>
                        ) : (
                            <>
                                <SidebarContent>
                                    <Link to='/' style={{ textDecoration: 'none' }}>
                                        <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                                    </Link>
                                    <Link to='/login' style={{ textDecoration: 'none' }}>
                                        <MenuItem icon={<FiHome />}>Login</MenuItem>
                                    </Link>
                                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                                        <MenuItem icon={<FiHome />}>Signup</MenuItem>
                                    </Link>
                                </SidebarContent>
                            </>
                        )}
                    </Menu>
                </ProSidebar>
            </div>
        </>
    );
}
