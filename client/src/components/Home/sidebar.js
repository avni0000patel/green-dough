import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from "react-pro-sidebar";
import { FiHome, FiLogOut } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import './sidebar.css';
import Auth from "../../utils/auth";
// import ProfileForm from './profileForm';
import ProfileList from './profileList';

import { QUERY_PROFILES } from '../../utils/queries';

function Sidebar() {

    const [activeIndex, setActiveIndex] = useState(() => {
        const initialIndex =
            window.location.pathname === '/' ? 0
                : window.location.pathname === '/login' ? 1
                    : window.location.pathname === '/signup' ? 2
                        : 0;
        return initialIndex;
    });

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];

    return (
        <>
            <div className="sidebar" id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar>
                    <SidebarHeader>
                        <div className="logotext">
                            Green Dough
                        </div>
                    </SidebarHeader>
                    {Auth.loggedIn() ? (
                        <>
                            <div className="profile">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <ProfileList
                                        profiles={profiles}
                                    />
                                )}
                                <Link
                                    to="/profile"
                                >
                                    Edit Profile
                                </Link>
                                {/* <ProfileForm /> */}
                            </div>
                            <SidebarContent>
                                <Menu iconShape="square">
                                    <MenuItem icon={<FiLogOut />}>
                                        Logout
                                        <Link id="MenuItemLogout" onClick={logout} />
                                    </MenuItem>
                                </Menu>
                            </SidebarContent>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;