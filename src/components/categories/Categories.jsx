import React, { useEffect, useState } from "react";
import "./Categories.css";
import data from "../../static/alldata";
import Carts from "../Carts/Carts";
import { useParams, useSearchParams } from "react-router-dom";
function Categories() {
  const [searchParams] = useSearchParams();
  const [filtered, setFiltered] = useState(null);
  let category = searchParams.get("category");

  useEffect(() => {
    setFiltered(
      data.filter(
        (i) =>
          i.title.includes(category.slice(0, 6)) ||
          i.type.includes(category.slice(0, 6))
      )
    );
  }, []);

  console.log(category);
  return (
    <div>
      <Carts data={filtered} />
    </div>
  );
}

export default Categories;
