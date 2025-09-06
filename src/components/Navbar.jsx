import { Link } from "react-router-dom"
import '../styles/App.css'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';


export const Navbar = ({cartCount}) => {
    return (
        <nav>
            <Link to="home" className="nav-link">Home</Link>
            <Link to="shop" className="nav-link">Shop</Link>
            <Link to="cart" className="nav-link"><Icon path={mdiCartOutline} size={1} /> {cartCount}</Link>
        </nav>
    )
}