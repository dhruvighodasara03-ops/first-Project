import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 shadow-md">
      <ul className="flex gap-6 list-none">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "text-white hover:bg-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
