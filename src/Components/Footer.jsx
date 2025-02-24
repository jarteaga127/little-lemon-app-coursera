import FooterLogo from "../assets/Asset 16@4x-2.png";

const Footer = () => {
    return ( 
        <>
        <footer>
            <img src={FooterLogo} alt="Little Lemon" className="footer-logo"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Book a table</a></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul>
                <h4>Follow Us</h4>
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
            </footer></>
     );
}
 
export default Footer;