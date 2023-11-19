import React, { useEffect, useState } from "react";
import data from "../../static/alldata";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Heart } from "../../redux/addToHeart";
import { ADD_TO_CART } from "../../redux/addToCart";
import "./Sorted.css";
import { toast } from "react-toastify";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineRight,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Sorted({ data }) {
  const dispatch = useDispatch();

  function addCart(pro) {
    dispatch(ADD_TO_CART({ pro }));
  }
  function adcart(item) {
    dispatch(ADD_TO_CART({ pro: item }));
    toast.success("Tovar savatda!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  }
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const cartData = useSelector((s) => s.addToCart).map((i) => i.id);
  const cartnumber = useSelector((s) => s.addToCart).map((i) => i.quantity);

  return (
    <div className="sorted">
      <h2 className="sorted_title">Sevimlilar</h2>
      <section>
        {data?.map((item, index) => {
          return (
            <div key={index} className="cardItem">
              {heartData.some((i) => i === item.id) ? (
                <AiFillHeart
                  className="heart fillheart"
                  onClick={() => dispatch(Add_To_Heart({ pro: item }))}
                />
              ) : (
                <AiOutlineHeart
                  className="heart"
                  onClick={() => dispatch(Add_To_Heart({ pro: item }))}
                />
              )}

              <Link className="image__link" to={`/single-page/${item.id}`}>
                <img src={item.images[0]} alt="" />
              </Link>
              <p className="item_title">
                {item.title.length > 20
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
              </p>
              <p className="sariq">
                dan <b className="credit">{Math.ceil(item.price / 12)}</b>/so'm
                oyga
              </p>
              <div className="productPrice">
                <div className="price">
                  <s>{item.price + Math.ceil(item.price % 10)} so'm </s>
                  <span className="pure_price">{item.price} so'm</span>
                </div>
                {cartData.some((i) => i === item.id) ? (
                  <div>
                    <div className="shop shops">
                      {/* <button>
                      <FaMinus />
                    </button> */}
                      <span>Savatda</span>
                      {/* <button>
                      <FaPlus />
                    </button> */}
                    </div>
                  </div>
                ) : (
                  <button onClick={() => adcart(item)} className="shop">
                    <AiOutlineShoppingCart className="shopicon" />
                    Savatga
                  </button>
                )}
              </div>
            </div>
            // <div key={index} className="main_item">
            //   <img src={pro.images[0]} alt={pro.title} />
            //   <p>{pro.description.slice(0, 35)}</p>
            //   <b>
            //     {pro.price} <s>{pro.price + (pro.price % 10)}</s>
            //   </b>
            // </div>
          );
        })}
      </section>
    </div>
  );
}

export default Sorted;
