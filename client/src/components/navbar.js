import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    return <>
        <div>
            <nav className="navbar navbar-light bg-info text-white justify-content-center align-items-center">
            <div >
            <Link className="navbar-brand text-white" to="/">Home</Link>
                <Link className="navbar-brand text-white" to="/user">User</Link>
                <Link className="navbar-brand text-white" to="/card">Card</Link>
                <Link className="navbar-brand text-white" to="/labour">Worker</Link>
                </div>    
            </nav>
        </div>
    </>
}


export default Navbar;