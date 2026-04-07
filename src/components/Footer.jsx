import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Navigation Links */}
        <div className="flex justify-center gap-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-400"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex justify-center gap-4 text-sm">
          <NavLink to="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </NavLink>

          <NavLink to="/terms" className="hover:text-gray-400">
            Terms & Conditions
          </NavLink>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
