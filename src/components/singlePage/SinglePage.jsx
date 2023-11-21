import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./SinglePage.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import data from "../../static/alldata";
import { BsHeartFill } from "react-icons/bs";
import { PiHeartThin } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, removeFromCart } from "../../redux/addToCart.js";
import { Add_To_Heart } from "../../redux/addToHeart";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa6";

function SinglePage() {
  let { id } = useParams();
  const [imgIndex, setImgIndex] = useState(0);
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const cartData = useSelector((s) => s.addToCart).map((i) => i.id);
  const cartnumber = useSelector((s) => s.addToCart).map((i) => i.quantity);

  let singleData = data?.find((i) => i.id.toString() === id);

  let prices = singleData?.price;
  console.log(cartnumber);
  const dispatch = useDispatch();

  function addToCart(item) {
    console.log("ok");
    dispatch(ADD_TO_CART({ pro: item }));
  }

  function removeCart(item) {
    dispatch(removeFromCart({ pro: item }));
  }

  function adcart(item) {
    dispatch(ADD_TO_CART({ pro: item }));
    toast.success("Tovar savatda!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  }

  let price = prices * cartnumber;

  return (
    <div className="single_pages_parts">
      <div className="homeproducts">
        <div className="homeproducts_boxs">
          <div className="homeproducts_boxs_left">
            <div className="homeproducts_boxs_left_carousel">
              <div className="homeproducts_boxs_left_carousel_left">
                {singleData?.images?.map((img, index) => (
                  <div
                    onClick={() => setImgIndex(index)}
                    key={index}
                    className="homeproducts_boxs_left_carousel_left_img"
                  >
                    <img
                      src={img}
                      alt={singleData?.title}
                      title={singleData?.title}
                    />
                  </div>
                ))}
              </div>
              <div className="homeproducts_boxs_left_carousel_right">
                <div className="homeproducts_boxs_left_carousel_right_imgs">
                  <img src={singleData?.images[imgIndex]} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="homeproducts_boxs_right">
            <div className="homeproducts_boxs_right_header">
              <div className="homeproducts_boxs_right_header_text">
                <p>
                  <AiFillStar /> 4.9( 38 baho ){" "}
                </p>
                <p>600 ta buyurtma</p>
              </div>
              <h4>{/* <AiOutlineHeart /> */}</h4>
            </div>
            <h2>{singleData?.description}</h2>
            <h3>
              <span>{price} / birlik </span> <s>{price * 1.5}</s>
            </h3>
            <p className="homeproducts_boxs_right_4 column_media">
              <span>Sotuvchi: </span>
              <span>
                <a href="/">{singleData?.brand}</a>
              </span>
            </p>
            <p className="column_media">
              <span>Narx: </span> <span>{singleData?.price * cartnumber}</span>
            </p>
            <hr style={{ margin: "20px 0" }} />

            <p>Miqdori:</p>
            <div className="homeproducts_boxs_right_header_text_products_miqdori">
              <div className="homeproducts_boxs_right_header_text_products_miqdori_1">
                <button onClick={() => removeCart(singleData)}>
                  <AiOutlineMinus className="AiOutlineMinus" />
                </button>
                <h3>{cartnumber ? cartnumber : 0}</h3>
                <button onClick={() => addToCart(singleData)}>
                  <AiOutlinePlus className="AiOutlineMinus" />
                </button>
              </div>
            </div>
            <div className="homeproducts_boxs_right_header_text_products_prices">
              <h2>{price}</h2>
              <s>{price * 1.5}</s>
            </div>
            <div className="homeproducts_boxs_right_header_text_products_buttons">
              {cartData?.some((i) => i === singleData.id) ? (
                <button id="savatda">Savatda</button>
              ) : (
                <button onClick={() => adcart(singleData)}>
                  Savatga qo'shish
                </button>
              )}

              <button className="btsvg">
                {heartData.some((i) => i === singleData.id) ? (
                  <AiFillHeart
                    onClick={() => dispatch(Add_To_Heart({ pro: singleData }))}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => dispatch(Add_To_Heart({ pro: singleData }))}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
