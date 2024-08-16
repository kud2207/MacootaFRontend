import React from "react";
import "./style.css";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Calcul du prix total des articles
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          {/* Si le panier est vide, afficher un message */}
          <div className="cart-details">
            {CartItem.length === 0 && <h1 className="no-items product">Aucun article dans le panier</h1>}

            {/* Affichage des articles dans le panier */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* Contrôle de la quantité de produit */}
                    <div className="cartControl d_flex">
                      <button className="incCart" onClick={() => addToCart(item)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button className="desCart" onClick={() => decreaseQty(item)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Résumé du panier</h2>
            <div className="d_flex">
              <h4>Prix total :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
