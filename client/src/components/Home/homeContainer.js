import Background from './background';
import Nav from './nav'
import Home from './home'
import './homeContainer.css';

export default function HomeContainer() {
    return (
        <div className="all">
            <Background />
            <Nav />
            <div className="homeContainer">
                <Home />
            </div >
        </div>
    )
}