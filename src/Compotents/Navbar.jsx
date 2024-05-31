import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Styles/Navbar.css";



const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
       Donate Blood
       </NavLink>

       <div
         className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/donor" className="nav__link"  onClick={closeMenuOnMobile}>
               Donor
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/contact"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Contact
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/services"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Services
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/signin" className="nav__link nav__cta">
               Login
               </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;