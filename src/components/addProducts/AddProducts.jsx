import React from "react";
import { Link } from "react-router-dom";
import "./AddProducts.css";

function AddProducts() {
  return (
    <div className="cart">
      <h1>Savatda hozircha bo'sh</h1>
      <p>
        Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning
      </p>
      <Link to={"/"}>
        <button className="bbn">Katalogga o'tish</button>
      </Link>
      <Link to={"/"}>
        <button className="butonn">Asosiy ekranga</button>
      </Link>
    </div>
  );
}

export default AddProducts;
