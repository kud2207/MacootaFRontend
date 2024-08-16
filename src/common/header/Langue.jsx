import React, { useState } from "react";
import FranceFlag from "./france.png"; //icone fr
import EnglischFlag from "./anglais.png"; //icone En

const Langue = () => {
  const [langue, setLangue] = useState("en");

  const handleChange = (event) => {
    setLangue(event.target.value);
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <label htmlFor="langue-select">
        <img
          src={langue == "fr" ? `${FranceFlag}` : `${EnglischFlag}`}
          alt="French Flag"
          style={{ height: 20, width: 20 }}
          title={langue == "fr" ? `Langue Francais` : `Langue Anglais`}
        />
      </label>
      <select
        id=""
        value={langue}
        onChange={handleChange}
        style={{ color: "#636a6f", fontWeight: "bold" }}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Langue;
