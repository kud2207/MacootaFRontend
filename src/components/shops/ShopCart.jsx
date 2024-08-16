import axios from "axios";
import React, { useState, useEffect } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/produit");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduits();
  }, []);

  return (
    <>
      {produits.map((produit) => {
        return (
          <div className="box" key={produit.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{produit.reductionProduit}% Off</span>
                <img src={produit.imgLien} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{produit.nameProduit}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${produit.prixProduit}.00 </h4>

                  <button onClick={() => addToCart(produit)}> {/* Passer le produit à addToCart */}
                    <i className="fa fa-plus"></i> Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
