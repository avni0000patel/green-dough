import Nav from './nav'
import Home from './home'
import './homeContainer.css';

export default function HomeContainer() {
    return (
        <div className="all">
            <Nav />
            <div className="homeContainer">
                <Home />
            </div >
        </div>
    )
}