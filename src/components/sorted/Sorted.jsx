import React, { useEffect, useState } from "react";
import data from "../../static/alldata";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Heart } from "../../redux/addToHeart";
import { ADD_TO_CART } from "../../redux/addToCart";
import "./Sorted.css";
import Carts from "../Carts/Carts";
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
      <Carts className="sortedData" data={data} />
    </div>
  );
}

export default Sorted;
