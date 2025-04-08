import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CogIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setauth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setauth(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-white -ml-20"
          >
            Motive
          </Link>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {auth === true && (
              <li>
                <Link to="/profile">
                  <CogIcon />
                </Link>
              </li>
            )}
            {auth === false ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="block md:hidden">
          <ul className="menu menu-vertical p-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
