import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { DATA, LOGO, INFO } from "../../static";
import { IoGridOutline } from "react-icons/io5";
import "../footer/Footer.css";
import "./Logos.css";
function Logos() {
  return (
    <div className="top-footer">
      <div className="title">
        <h1 className="cardtitle">
          Mashhur brendlar
          <a href="#">
            Barchasini ko'rish <IoIosArrowForward />
          </a>
        </h1>
      </div>
      <div className="logos_footer">
        <div className="cartsLogo">
          {DATA?.map((item, index) => (
            <div key={index} className="cartItem">
              <div className="img__cart">
                <img src={item.img} alt="logo img" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button id="katalogga">
          <IoGridOutline /> Katalogga o'tish
        </button>
      </div>
    </div>
  );
}

export default Logos;
