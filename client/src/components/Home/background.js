export default function Background() {
    const styles = {
        background: {
            width: '100%',
            minHeight: '100vh',
            position: 'fixed',
            backgroundColor: '#370799',
            zIndex: '-1',
        }
    }
    return (
        <div className="background" style={styles.background}>
        </div>
    )
}