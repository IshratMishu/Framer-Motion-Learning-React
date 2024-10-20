import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-10 list-none mt-20">
            <Link to='/'><li>Home</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </div>
    );
};

export default Navbar;