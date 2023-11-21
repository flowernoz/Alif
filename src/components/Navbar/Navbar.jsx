import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import data from "../../static/alldata";
import { oldkatalogData } from "../../static/headerData";
/// ICONS ///
import { HiBars3 } from "react-icons/hi2";
import { FiX } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Register from "../Register/Register";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

function Navbar() {
  const heartnumber = useSelector((s) => s.addToHeart).length;
  const cartnumber = useSelector((s) => s.addToCart).length;
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  let phone = localStorage.getItem("phone");
  openRegister
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const [searchResult, setSearchResult] = useState(null);
  function search(value) {
    if (!value) {
      return setSearchResult(null);
    }
    let result = data.filter((i) =>
      i.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(result);
  }
  return (
    <div className="header">
      <div className="header__top">
        <div className="header_top_left">
          <Link to={"/"} className="display__none__logo">
            <img src={logo} alt="logo" />
          </Link>
          <select>
            <option value="uzb">Uzb</option>
            <option value="rus">Rus</option>
          </select>
        </div>
        <div className="header__right">
          <NavLink path={"/"}>Namoz vaqti</NavLink>
          <NavLink path={"/"}>alif shopda soting!</NavLink>
          <NavLink path={"/"}>Bizga yozing</NavLink>
        </div>
      </div>
      <div className="header__bottom">
        {openRegister && <Register setOpenRegister={setOpenRegister} />}
        <Link to={"/"} className="header__logo">
          <img src={logo} alt="" />
        </Link>

        <button
          className="header_katalog"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? <FiX /> : <HiBars3 />}
          <span>Tovarlar katalogi</span>
        </button>

        {/* -------- katalog -------------- */}

        {openSidebar && (
          <div className="catalog_wrapper">
            {oldkatalogData.map((katalogItem, index) => (
              <div key={index} className="catalog_wrapper_item">
                <p>{katalogItem.title.titleName}</p>
                <div className="catalog_wrapper_item_section">
                  <div className="catalog_wrapper_item_section_links">
                    {katalogItem.collection.map((item, index) => (
                      <div key={index}>
                        <h4>{item.collectionItemName}</h4>
                        <ul>
                          {item.collectionItemLinks.map((link_item, index) => (
                            <li key={index}>
                              <Link to={"/"}>{link_item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="header_searchbar">
          <input
            type="search"
            placeholder="Tovarlarni izlash"
            onChange={(e) => search(e.target.value)}
          />
          <button>
            <GoSearch />
          </button>

          <div
            className="searchResult"
            style={{ display: searchResult?.length ? "flex" : "none" }}
          >
            {searchResult?.map((item, index) => (
              <Link
                onClick={() => setSearchResult(null)}
                to={`/single-page/${item.id}`}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="header__links">
          <Link className="header__link" to={"/cart"}>
            <AiOutlineShoppingCart />
            <span>Savat</span>
            {cartnumber > 0 ? (
              <div className="likedNumber">{cartnumber}</div>
            ) : (
              ""
            )}
          </Link>
          <Link className="header__link hearted" to={"/heart"}>
            <AiOutlineHeart />
            <span>Saralanganlar</span>
            {heartnumber !== 0 ? (
              <div className="likedNumber">{heartnumber}</div>
            ) : (
              ""
            )}
          </Link>

          <button
            onClick={() => setOpenRegister(!openRegister)}
            className="login"
          >
            <span>{phone ? phone : "Kirish"}</span>
          </button>
        </div>
      </div>
      <div className="header__sub">
        <NavLink to={"/"}>
          <IoHomeOutline />
          Home
        </NavLink>
        <a href="#categories_main">
          <Link to={"/"}>
            <MdOutlineManageSearch />
            Katalog
          </Link>
        </a>
        <NavLink to={"/cart"}>
          <AiOutlineShoppingCart />
          Savat
          <div className="likedNumber"></div>
        </NavLink>
        <NavLink to={"/heart"}>
          <AiOutlineHeart />
          Saralanganlar
          <div className="likedNumber"></div>
        </NavLink>
        <button onClick={() => setOpenRegister(true)}>
          <FaRegUser />
          Profil
        </button>
      </div>
    </div>
  );
}

export default Navbar;
