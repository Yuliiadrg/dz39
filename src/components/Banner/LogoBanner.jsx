import './LogoBanner.scss';
import logoBanner from '../../Images/logo.jpg';

function LogoBanner() {
    return (
        <img className="logoBanner" 
        src={logoBanner} 
        alt="Full width banner" />
    );
}

export default LogoBanner;