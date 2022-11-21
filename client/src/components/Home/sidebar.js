import React, { useState } from "react";
import { Link } from 'react-router-dom';
//react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
//icons from react icons
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import Auth from "../../utils/auth";
import "react-pro-sidebar/dist/css/styles.css";
import './sidebar.css';

export default function Sidenav() {
    //menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    //custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* Icon change using menucollapse state */}
                            <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
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
                                    <MenuItem to="/" active={true} icon={<FiHome />}>
                                        Home
                                    </MenuItem>
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
                                <MenuItem to="/" active={true} icon={<FiHome />}>
                                    Home
                                </MenuItem>
                                <MenuItem to="/login" icon={<FiHome />}>
                                    Login
                                </MenuItem>
                                <MenuItem to="/signup" icon={<FiHome />}>
                                    Signup
                                </MenuItem>
                            </>
                        )}
                    </Menu>
                </ProSidebar>
            </div>
        </>
    );
}
