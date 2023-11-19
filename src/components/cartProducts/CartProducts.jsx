import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import "./CartProducts.css";
import { ADD_TO_CART, removeFromCart, deleteCart } from "../../redux/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Heart } from "../../redux/addToHeart";

function CartProducts({ data }) {
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const cartData = useSelector((s) => s.addToCart).map((i) => i.id);
  const dispatch = useDispatch();

  return (
    <div className="home_cart_products">
      <div className="cart_products">
        <div className="cart_product_item">
          <h2>
            Savatingiz, <span>{data?.length} mahsulot</span>
          </h2>
          <div>
            <h4>Hammasini yechish</h4>
          </div>
        </div>
        {data?.map((item, index) => (
          <div key={index} className="cart_product_items">
            <div className="cart_product_items_img">
              <img src={item.images[0]} alt="/" />
            </div>
            <div className="cart_products_items_sale">
              <h3>{item.title}</h3>
              <p>
                Sotuvchi: <span>{item.brand}</span>
              </p>
              <p>
                Narx: <span>{item.price * item.quantity}</span>
              </p>
              <div className="cart_products_cart_products_items_count">
                <div className="cart_products_cart_products_items_count_1">
                  <button
                    onClick={() => dispatch(removeFromCart({ pro: item }))}
                  >
                    <AiOutlineMinus className="Minus" />
                  </button>
                  <h3>{item.quantity}</h3>
                  <button onClick={() => dispatch(ADD_TO_CART({ pro: item }))}>
                    <AiOutlinePlus className="Minus" />
                  </button>
                </div>
              </div>
            </div>
            <div
              onClick={() => dispatch(deleteCart({ pro: item }))}
              className="trash"
            >
              <FaTrash />
            </div>
          </div>
        ))}
      </div>

      <div className="order">
        <div className="place_an_order">
          <div className="order_text">
            <b>
              Jami <span>1100000 so'm</span>
            </b>
            <h4>
              Tovarlar soni <b>1 dona</b>
            </h4>
            <h4>
              Yetkazib berish <s>Bepul</s>
            </h4>
            <p>Eshikgacha, Butun O'zbekiston bo'ylab, 1-2 kun</p>
          </div>
        </div>
        <div className="order_product">
          <h3>Bepul yetkazib berish</h3>
          <span>Butun O'zbekiston bo'ylab, 1-2kun</span>
          <button>Muddatli to'lovga olish</button>
          <button onClick={() => window.location.reload()} className="carta">
            Karta orqali sotib olish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
