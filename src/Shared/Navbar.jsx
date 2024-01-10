import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-600 text-primary-content flex justify-between items-center py-4 px-6">
      <NavLink to={"/"} className="text-2xl font-bold text-white">
        RCRUD
      </NavLink>

      <nav className="flex justify-center items-center gap-6">
        <Link to={"/"} className="text-xl font-bold text-white">
          Books
        </Link>
        <Link to={"/add-book"} className="text-xl font-bold text-white">
          Add Book
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
