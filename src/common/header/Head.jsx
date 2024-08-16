import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Langue from "./Langue";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex ">
          <div className="left row ">
            <FaPhoneAlt  title="N°Telephone"/>&nbsp;&nbsp;&nbsp;
            <label className="displayNone"> +237 692 134 088 </label>
            <CgMail title="Gmail" color="#C0392B" size={21}/>
            <label className="displayNone"> macoota237@gmail.com</label>
          </div>
          <div className="">
            <Langue />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
