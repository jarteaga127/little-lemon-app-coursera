import Logo from "../assets/Logo.svg";

const Nav = () => {
    return ( 
        <>
        <nav>
            <header><a href="#">
                <img src={Logo} alt="" />
                </a></header>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Book a table</a></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            </nav></>
     );
}
 
export default Nav;