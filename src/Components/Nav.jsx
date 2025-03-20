import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Nav = () => {
    return ( 
        <>
        <nav>
            <header><Link to="/">
                <img src={Logo} alt="" />
                </Link>
                </header>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/book-a-table">Book a table</Link></li>
                <li><Link to="/">Order online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
            </nav></>
     );
}
 
export default Nav;