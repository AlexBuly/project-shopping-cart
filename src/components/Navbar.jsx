import { Link } from "react-router-dom"
import '../styles/App.css'

export const Navbar = ({cartCount}) => {
    return (
        <nav>
            <Link to="home" className="nav-link">Home</Link>
            <Link to="shop" className="nav-link">Shop</Link>
            <Link to="cart" className="nav-link">Cart {cartCount}</Link>
        </nav>
    )
}