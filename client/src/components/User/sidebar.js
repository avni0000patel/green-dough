import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";

export default function Nav() {
    const styles = {
        header: {
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
            fontWeight: 'bolder',
        },
        nav: {
            color: 'white',
            margin: '10px',
        }
    }

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <div>
            <nav style={styles.header}>
                <h2 style={styles.title}>Green Dough</h2>

                <ul className="nav">
                    <>
                        <li className="nav-item" style={styles.nav} onClick={logout}>Logout</li>
                    </>
                </ul>
            </nav>
        </div>
    )
}