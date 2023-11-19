import React, { useEffect } from "react";
import "./Carts.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineRight,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Heart } from "../../redux/addToHeart";
import { ADD_TO_CART, removeFromCart } from "../../redux/addToCart";
import { toast } from "react-toastify";

function Carts({ data, componentName, moreLink }) {
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const cartData = useSelector((s) => s.addToCart).map((i) => i.id);
  const cartnumber = useSelector((s) => s.addToCart).map((i) => i.quantity);

  function addToCart(item) {
    console.log("ok");
    dispatch(ADD_TO_CART({ pro: item }));
  }
  function removeCart(item) {
    dispatch(removeFromCart({ pro: item }));
    toast.success("Tovar o'chirildi!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  }
  function adcart(item) {
    dispatch(ADD_TO_CART({ pro: item }));
    toast.success("Tovar savatda!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  }

  return (
    <div className="Carts">
      <div className="cardtitle">
        <h1>
          {componentName}
          <Link>
            {moreLink}
            <AiOutlineRight />
          </Link>
        </h1>
      </div>
      <div className="cards">
        {data?.slice(0, 12)?.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default Carts;
