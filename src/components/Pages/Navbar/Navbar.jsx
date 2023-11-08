import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/image/352514_local_restaurant_icon.png";
import userPicture from "../../../assets/image/user.png";
import useAuth from "../../Hooks/useAuth";


const activeLink = "text-[#7DA640] px-2 font-bold border-b-2 border-[#7DA640]";
const normalLink = "text-black dark:text-white";

const navLink = (
  
  <>
    <span className="flex justify-center items-center p-2 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Home
      </NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
    <NavLink to="/fooditems" className={({isActive}) => isActive ? activeLink:normalLink} >All Food Items</NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/blog" className={({isActive}) => isActive ? activeLink:normalLink}>Blog</NavLink>
    </span>
  </>
);




const Navbar = () => {
  const {user, logOut} = useAuth();
  console.log(user);
  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div data-aos="fade-down" className="">
      <div className="navbar bg-white w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navLink}
          </ul>
        </div>
        <img className="w-12 h-10" src={logo} alt="" />
        <Link to={'/'}><p className="bg-white text-[#7DA640] normal-case text-3xl italic font-bold">Crave</p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="invisible md:visible">{user.email}</p>
            <div className="dropdown dropdown-end flex">
              <label tabIndex={0} className="mr-2">
              <div className="w-10 rounded-full mx-auto md:mx-2 ">
                <img className="rounded-full" src={user.photoURL || userPicture} />
              </div>
            </label>
            <div
                tabIndex={0}
                className="mt-10 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/addedfood"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  My added food
                </NavLink>
                <NavLink
                  to="/addfood"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Add food
                </NavLink>
                <NavLink
                  to="/order"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Orders
                </NavLink>
              </div>
              </div>
                      
            <button
              className="btn btn-sm bg-[#7DA640] text-white hover:"
              onClick={handlelogOut}
            >
              logout
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="btn btn-sm bg-[#7fa743] text-white hover:">
              login
            </button>
          </Link>
        )}

      </div>
    </div>
    </div>
  );
};

export default Navbar;