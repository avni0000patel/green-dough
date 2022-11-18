import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {

    return (
        <div>
            <div className="description">
                <h1>Send and receive money with Green Dough!!!</h1>
                <h4>We are a user-friendly, secure, and fast platform!</h4>
            </div>
            <Link to='/signup' className="btnLink"><button className="signupBtn btn btn-block py-3 ">Signup</button></Link>
        </div>
    )
}