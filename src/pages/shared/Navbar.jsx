import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  }
  const navOptions = (
    <>
      <li><Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
      <li><Link to="/menu" className="hover:text-yellow-400 transition-colors duration-300">Menu</Link></li>
      <li><Link to="/order" className="hover:text-yellow-400 transition-colors duration-300">Order Now</Link></li>
      {
        user ? <>
        <li><button onClick={handleLogOut} className="hover:text-yellow-400 transition-colors duration-300 bg-transparent border-none text-white cursor-pointer">LogOut</button></li>
        </> : <>
        <li><Link to="/login" className="hover:text-yellow-400 transition-colors duration-300">Login</Link></li>
        </>
      }
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl mx-auto shadow-lg bg-black/80 backdrop-blur-sm text-white px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-sm rounded-box z-50 mt-3 w-52 p-4 shadow-xl"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold hover:text-yellow-400 transition-colors duration-300">Bistro Boss</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-sm">{user.email?.charAt(0).toUpperCase()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
