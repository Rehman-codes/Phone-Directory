import { Link } from 'react-router-dom';
import logo from '../../assets/fav.png';
import './navbar.css';

function NavBar() {
    return (
        <>
            <nav>
                <div>
                <Link to='/' > <img src={logo} alt="logo" /></Link>
                </div>
                <div>
                    <Link to='/' >Home</Link>
                    <Link to='/viewDirectory'>Directory</Link>
                    <Link to='/addPhoneNumber'>Add</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
