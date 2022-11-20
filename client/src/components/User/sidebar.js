import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import numeral from 'numeral';
import { FundsContext } from "./fundsContext";

function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [])
    return size
}

export default function Sidebar() {
    const [successfulLogout, setSuccessfulLogout] = useState(false);
    const [userData, setUserData] = useState({})
    const [userFunds, setUserFunds] = useState('')
    const { updateFundsContext, toggleContext, refreshSidebarContext } = useContext(FundsContext)
    const [updateFunds, setUpdateFunds] = updateFundsContext
    const [refreshSidebar, setRefreshSidebar] = refreshSidebarContext

    const [toggle, setToggle] = toggleContext

    const [PPErrorMsg, setPPErrorMsg] = useState('')

    // Hook for controlling the sidebar depending on screen size.
    const width = useWindowSize();

    const location = useLocation()
    const currentPath = location.pathname

    const highlight = {
        textDecoration: 'underline',
        textDecorationColor: '#ff778f',
        textDecorationThickness: '2px',
    }

    const iconHighlight = {
        color: '#ff778f'
    }

    const dashboardHighlight = currentPath === '/user/home' ? { ...highlight } : null
    const friendsHighlight = currentPath === '/user/friends' ? { ...highlight } : null
    const payRequestHighlight = currentPath === '/user/pay-request' ? { ...highlight } : null
    const iconHome = currentPath === '/user/home' ? { ...iconHighlight } : null
    const iconFriend = currentPath === '/user/friends' ? { ...iconHighlight } : null
    const iconPayRequest = currentPath === '/user/pay-request' ? { ...iconHighlight } : null
    const iconHistory = currentPath === '/user/history' ? { ...iconHighlight } : null

    const getUserData = async () => {
        const resp = await axios.get('/api/user/user-data');
        setUserData(resp.data)
    }

    const getUserFunds = async () => {
        const resp = await axios.get('/api/user/user-funds');
        setUserFunds(resp.data.funds)
    }

    const profilePicChange = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append('file', file)
        // console.log(file)
        if (file) {
            if (file.size < 1572864) {
                if (file.type === 'image/jpeg' || file.type === 'image/png') {
                    const resp = await axios.put('/api/user/profile-picture', data);
                    if (resp.data.status) setRefreshSidebar(!refreshSidebar)
                } else {
                    setPPErrorMsg('File must be in png or jpeg format')
                }
            }
            else {
                setPPErrorMsg('File size is too large.')
            }
        }
    }

    const processLogout = async (e) => {
        const resp = axios.get('/api/logout');
        setSuccessfulLogout(true)
    }

    const toggleSidebar = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setSuccessfulLogout(false);
        getUserData();
    }, [refreshSidebar])

    useEffect(() => {
        getUserFunds()
    }, [updateFunds])

    useEffect(() => {
        if (width < 1000 && toggle) setToggle(false)

        if (width > 1000 && !toggle) setToggle(true)
    }, [width])

    return (
        <section className={toggle ? "sidebar open" : "sidebar"}>

            <div className="toggleIcon"><i className="fas fa-bars" onClick={toggleSidebar}></i></div>

            {toggle ?
                <div className={toggle ? "sidebarContent active" : "sidebarContent"}>
                    <form className='profilePicture'>
                        <label htmlFor="pp-upload"><img src={userData.profilePic} alt="profile pic" /></label>
                        <input id='pp-upload' type="file" name="content" onClick={() => setPPErrorMsg('')} onChange={profilePicChange} />
                    </form>

                    <p className='pp-error-msg'>{PPErrorMsg}</p>

                    <div className="nameCard">
                        <h3>{userData.first} {userData.last}</h3>
                        <p>{numeral(userFunds).format('$0,0.00')}</p>
                    </div>

                    <nav id="dashNav">
                        <ul>
                            <li><Link to="/user/home" style={dashboardHighlight}>Dashboard</Link></li>
                            <li><Link to="/user/friends" style={friendsHighlight}>Friends</Link></li>
                            <li><Link to="/user/pay-request" style={payRequestHighlight}>Pay / Request</Link></li>
                            <li><Link to="/user/history">History</Link></li>
                        </ul>
                    </nav>

                    <nav id="dashSubNav">
                        <ul>
                            <li><Link to="/user/settings"><i className="fas fa-cog"></i></Link></li>
                            <li><p onClick={processLogout}><i className="fas fa-sign-out-alt"></i></p></li>
                        </ul>
                    </nav>
                </div>
                :

                <nav id="quickLinks">
                    <ul>
                        <li><Link style={iconHome} to="/user/home"><i className="fas fa-home"></i></Link></li>
                        <li><Link style={iconFriend} to="/user/friends"><i className="fas fa-user-friends"></i></Link></li>
                        <li><Link style={iconPayRequest} to="/user/pay-request"><i className="fas fa-hand-holding-usd"></i></Link></li>
                        <li><Link style={iconHistory} to="/user/history"><i className="fas fa-money-check-alt"></i></Link></li>
                        {/* <li><p onClick={processLogout}><i className="fas fa-sign-out-alt"></i></p></li> */}
                    </ul>
                </nav>

            }

            <Routes>
                <Route path={currentPath} exact>
                    {successfulLogout && <Navigate to='/' />}
                </Route>
            </Routes>
        </section>
    )
}