import './background.css';
export default function Background() {
    const styles = {
        background: {
            width: '100%',
            minHeight: '100vh',
            position: 'fixed',
            zIndex: '-1',
        }
    }
    return (
        <div className="background" style={styles.background}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    )
}