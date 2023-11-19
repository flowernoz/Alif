import React from "react";
import { Link } from "react-router-dom";
import "./Favourite.css";

function Favourite() {
  return (
    <div className="cart">
      <h1>Saralangan mahsulotlar ro'yxati xozircha bo'sh</h1>
      <p>uzoq vaqt qidirmaslik uchun o'zingizga yoqqan tovarlarni saqlang</p>
      <Link to={"/"}>
        <button className="bbn">Katalogga o'tish</button>
      </Link>
    </div>
  );
}

export default Favourite;
