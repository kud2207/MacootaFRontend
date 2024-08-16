import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";//menu
import { IoCloseSharp } from "react-icons/io5"; //close
const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex displayNone">
            <BiCategoryAlt size={40} />
            <h4>
              Nos Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu navlink" : "link f_flex capitalize "
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">user account</Link>
              </li>
              <li>
                <Link to="/vendor">user account</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
              <IoCloseSharp className="close home-btn"/>
              ) : (
                <RiMenu3Fill className="open"/>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
