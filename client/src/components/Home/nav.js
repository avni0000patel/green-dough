import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    const styles = {
        header: {
            // background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
            // position: 'fixed',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            top: '0',
            width: '100%',
            zIndex: '1',
            padding: '1rem 1rem',
        },
        title: {
            color: 'white',
        },
        nav: {
            color: 'white',
            margin: '10px',
        }
    }

    const location = useLocation()
    const currentPath = location.pathname

    const homePath = '/'
    const loginPath = '/login'
    const signupPath = '/signup'
    const aboutPath = '/about'
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        if (currentPath === homePath || currentPath === loginPath || currentPath === signupPath || currentPath === aboutPath) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }, [currentPath])

    return (
        <div>
            {showNav ?
                <nav style={styles.header}>
                    <h2 style={styles.title}>Green Dough</h2>

                    <ul className="nav">
                        <Link to='/'><li className="nav-item" style={styles.nav}>Home</li></Link>
                        <Link to='/about'><li className="nav-item" style={styles.nav}>About</li></Link>
                        <Link to='/login'><li className="nav-item" style={styles.nav}>Login</li></Link>
                    </ul>
                </nav>
                :
                null
            }

        </div>
    )
}