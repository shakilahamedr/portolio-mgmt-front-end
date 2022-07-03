import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
      <nav className="navbar">
        <h1>Portfolio Management System</h1>
        <div className="links">
            <Link to= "/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
      </nav> 
    );
}
 
export default Navbar;