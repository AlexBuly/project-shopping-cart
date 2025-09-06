import shopImage from "../images/mike-petrucci-c9FQyqIECds-unsplash.jpg";
import { Link } from "react-router-dom";
import '../styles/App.css'

export const Home = () => {
    return (
        <>
            <div className="welcome">
                <h1>Welcome to our shop!</h1>
                <div className="bottom">
                     <img src={shopImage} className="shop-image" alt="shop" />
                     <Link to="/shop" className="shop-link">Shop now</Link>
                </div>
            </div>
        </>
    )
}