import './Logo.scss';
import logo from '../../Images/logo.jpg';

function Logo() {
    return (
        <img className="logo" 
        src={logo} 
        alt="App logo" />
    );
}

export default Logo;