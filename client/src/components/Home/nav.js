import { Link } from 'react-router-dom';

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

    return (
        <div>
            <nav style={styles.header}>
                <h2 style={styles.title}>Green Dough</h2>

                <ul className="nav">
                    <>
                        <Link to='/'><li className="nav-item" style={styles.nav}>Home</li></Link>
                        <Link to='/about'><li className="nav-item" style={styles.nav}>About</li></Link>
                        <Link to='/login'><li className="nav-item" style={styles.nav}>Login</li></Link>
                        <Link to='/signup'><li className="nav-item" style={styles.nav}>Signup</li></Link>
                    </>
                </ul>
            </nav>
        </div>
    )
}