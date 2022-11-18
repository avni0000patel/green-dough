import { Link } from 'react-router-dom';
import './home.css';
import hero from '../../assets/hero.png';

export default function Home() {

    return (
        <div className="container">
            <div className="hero float-start">
                <img className="heroImg rounded-circle img-thumbnail" src={hero} alt="sending money" />
            </div>
            <div className="description">
                <h1>Send and Receive Money with Green Dough</h1>
                <h4>We are a user-friendly, secure, and fast platform!</h4>
            </div>
            <Link to='/signup' className="btnLink"><button className="signupBtn btn btn-block py-3 ">Signup</button></Link>
        </div>
    )
}