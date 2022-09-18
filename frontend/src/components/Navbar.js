import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <div>Diet Control</div>
                </Link>
                <div className="info">
                    <Link to="/about">
                        <div className="about">About</div>
                    </Link>
                    <Link to="/">
                        <div className="myAccount">My Account</div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;