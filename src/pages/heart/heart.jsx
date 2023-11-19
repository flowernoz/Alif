import React from "react";
import { useSelector } from "react-redux";
import Favourite from "../../components/Favourite/Favourite";
import Sorted from "../../components/sorted/Sorted";
import "./Heart.css";
function Heart() {
  let cartData = useSelector((s) => s.addToHeart);

  document.title = "Hearted";
  return (
    <div className="heartPage">
      <div>{cartData.length ? <Sorted data={cartData} /> : <Favourite />}</div>
    </div>
  );
}

export default Heart;
