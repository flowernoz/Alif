import React from "react";
import { useSelector } from "react-redux";
import AddProducts from "../../components/addProducts/AddProducts";
import CartProducts from "../../components/cartProducts/CartProducts";
import "./Cart.css";
function Cart() {
  let cartData = useSelector((s) => s.addToCart);

  document.title = "Savat - Alif";
  return (
    <div className="CartPage">
      <div>
        {cartData.length ? <CartProducts data={cartData} /> : <AddProducts />}
      </div>
    </div>
  );
}

export default Cart;
