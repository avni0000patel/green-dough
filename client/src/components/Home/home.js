import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';
import userfriendly from '../../assets/userfriendly.png';
import secure from '../../assets/secure.png';
import fast from '../../assets/fast.png';

export default function Home() {
    const styles = {
        container: {
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '15px 15px 15px rgba(46, 54, 68, 0.4)',
            display: 'flex',
            alignItems: 'center',
            padding: '5rem 3rem',
            marginBottom: '20px',
        },
        hero: {
            display: 'flex',
            justifyContent: 'center',
            flex: '1',
            margin: '1rem',
            overflow: 'hidden',
        },
        homeImg: {
            width: '300px',
            objectFit: 'contain',
            height: '300px',
        },
        description: {
            color: 'white',
        },
        green: {
            color: 'green',
        },
        top: {

        },
        heading: {
            color: '',
        },
        signupBtn: {
            color: '#5d0cff',
            background: 'white',
            fontWeight: 'bolder',
            borderRadius: '2.5rem',
        },
    }
    return (
        <div>
            <div className="container flex-row justify-center" style={styles.container}>
                < div className="hero col-12 col-md-4" style={styles.hero} >
                    <img className="homeImg rounded-circle img-thumbnail" style={styles.homeImg} src={hero} alt="sending money" />
                </div >
                <div className="description col-12 col-md-8" style={styles.description}>
                    <h1>Send and Receive Money with <span className="heading" style={styles.green}><strong>Green Dough</strong></span></h1>
                    <Link to='/signup' className="btnLink"><button className="signupBtn btn btn-block py-3" style={styles.signupBtn}>Signup</button></Link>
                </div>
            </div >
            <div className="container flex-row justify-center" style={styles.container}>
                <div className="description col-12 col-md-8" style={styles.description}>
                    <div className="top" style={styles.top}>
                        <h1 className="heading" style={styles.heading}><strong>Userfriendly</strong></h1>
                    </div>
                    <h4>We make money transfer easy with our userfriendly site.</h4>
                </div>
                < div className="hero col-12 col-md-4" style={styles.hero} >
                    <img className="homeImg rounded-circle img-thumbnail" style={styles.homeImg} src={userfriendly} alt="sending money" />
                </div >
            </div >
            <div className="container flex-row justify-center" style={styles.container}>
                < div className="hero col-12 col-md-4" style={styles.hero} >
                    <img className="homeImg rounded-circle img-thumbnail" style={styles.homeImg} src={secure} alt="sending money" />
                </div >
                <div className="description col-12 col-md-8" style={styles.description}>
                    <div className="top" style={styles.top}>
                        <h1 className="heading" style={styles.heading}><strong>Secure</strong></h1>
                    </div>
                    <h4>We make security our priority so you don't have to worry with our secure site.</h4>
                </div>
            </div >
            <div className="container flex-row justify-center" style={styles.container}>
                <div className="description col-12 col-md-8" style={styles.description}>
                    <div className="top" style={styles.top}>
                        <h1 className="heading" style={styles.heading}><strong>Fast</strong></h1>
                    </div>
                    <h4>We make sure money is transfed almost immediately and at any time with our fast site.</h4>
                </div>
                < div className="hero col-12 col-md-4" style={styles.hero} >
                    <img className="homeImg rounded-circle img-thumbnail" style={styles.homeImg} src={fast} alt="sending money" />
                </div >
            </div >
        </div>

    )
}