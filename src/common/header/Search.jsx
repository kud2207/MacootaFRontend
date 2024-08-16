import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import UserLogin from "./userLogin";
import MessageModal from "./MessageModal";

const Search = ({ CartItem }) => {
  // Fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  // Login status and user email
  const [loginStatus, setLoginStatus] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
      setLoginStatus(true);
    }
  }, []);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <Link to="/">
            <div className="logo width">
              <k className="macoota">M</k>
              <k className="macoota displayNone">aCoTa'a</k>&nbsp;
              <k>
                <BsCart4 size={35} color="#2874A6" />
              </k>
            </div>
          </Link>

          <div className="search-box f_flex">
            <CiSearch size={35} color="#A6ACAF" />
            <input type="text" placeholder="Search and hit enter..." />
            <span className="displayNone">All Category</span>
          </div>

          <div className="icon f_flex width" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <UserLogin />
              <span style={{ marginTop: '5px', fontSize: '10px', color: '#555', textAlign: 'center' }}>
                {userEmail}
              </span>
            </div>
            <SiGooglemessages size={30} onClick={openModal} style={{ cursor: 'pointer' }} />
            <div className="cart">
              <Link to="/cart" className="displayNone">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MessageModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Search;
