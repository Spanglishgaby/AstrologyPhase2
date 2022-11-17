import { Link } from "react-router-dom"

function Navbar (){
    return (
        <nav className="navbar">
            <Link to="/" class ="nav-item" >Home</Link>
            <Link to="/sunsign" class ="nav-item">Sun Sign</Link>
            <Link to="/horoscope" class ="nav-item" >Horoscope</Link>
            <Link to="/compatibility" class ="nav-item" >Compatibility</Link>
            <Link to="/reviews" class ="nav-item">Reviews</Link>
            {/* <button id="loginBtn" >LogIn</button> */}
        </nav>
    )

}
export default Navbar;
