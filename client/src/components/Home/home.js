import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';

export default function Home() {
    const styles = {
        container: {
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '15px 15px 15px rgba(46, 54, 68, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '5rem 1rem',
            margin: '3rem',
        },
        hero: {
            display: 'flex',
            justifyContent: 'center',
            flex: '1',
            margin: '1rem',
            overflow: 'hidden',
        },
        heroImg: {
            width: '300px',
            objectFit: 'contain',
            height: '300px',
        },
        description: {
            color: 'white',
        },
        signupBtn: {
            color: '#5d0cff',
            background: 'white',
            fontWeight: 'bolder',
            borderRadius: '2.5rem',
        },
    }
    return (
        <div className="container" style={styles.container}>
            <div className="hero float-start" style={styles.hero}>
                <img className="heroImg rounded-circle img-thumbnail" style={styles.heroImg} src={hero} alt="sending money" />
            </div>
            <div className="description" style={styles.description}>
                <h1>Send and Receive Money with Green Dough</h1>
                <h4>We are a user-friendly, secure, and fast platform!</h4>
            </div>
            <Link to='/signup' className="btnLink"><button className="signupBtn btn btn-block py-3" style={styles.signupBtn}>Signup</button></Link>
        </div>
    )
}