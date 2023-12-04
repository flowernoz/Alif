import { useState } from "react";
import "./Footer.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { DATA, LOGO, INFO } from "../../static/index";
import { IoGridOutline } from "react-icons/io5";
import phoneImg from "../../assets/phoneImg.png";
import googlePlayImg from "../../assets/googlePlay.svg";
import appStoreImg from "../../assets/appStore.svg";
import appGalleryImg from "../../assets/appGallery.svg";
import qrCodeImg from "../../assets/qrCode.webp";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import yandexImg from "../../assets/yandex.png";

function Footer() {
  const [hide, setHide] = useState(true);
  const showP = ["Hammasini ko'rsatish", <IoIosArrowDown />];
  const hideP = ["Yashirish", <IoIosArrowUp />];
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="center__footer">
        <div className="container">
          <div className="top__center">
            <div className="left__top">
              <img src={phoneImg} alt="Phone img" />
            </div>
            <div className="center__top">
              <h2>Ajoyib takliflar har doim yoningizda</h2>
              <p>
                alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
                haqida hammadan tez biling
              </p>
              <div className="imgs">
                <img src={googlePlayImg} alt="img" />
                <img src={appStoreImg} alt="img" />
                <img src={appGalleryImg} alt="img" />
              </div>
            </div>
            <div className="right__top">
              <img src={qrCodeImg} alt="qrcode img" />
              <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="bottom__center">
            {INFO?.map((item, inx) => (
              <div key={item.id} className="info">
                <p>{item.title}</p>
                <div className="texts">
                  <p>
                    {hide ? item.p.split("").slice(0, 194).join("") : item.p}
                  </p>
                </div>
                <button onClick={() => setHide(!hide)}>
                  {hide ? showP : hideP}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="grid__footer">
            <div className="carts__foter">
              <div className="title__carts">
                <p>Hujjatlar</p>
              </div>
              <div className="links__footer">
                <a href="#">Sotish uchun umumiy shartlar</a>
                <a href="#">Ofertalar arxivi</a>
                <a href="#">Nizom</a>
                <a href="#">Guvohnoma</a>
              </div>
            </div>
            <div className="carts__foter">
              <div className="title__carts">
                <p>Servis</p>
              </div>
              <div className="links__footer">
                <a href="#">Muddatli to'lov Islomda</a>
                <a href="#">alif shopda soting!</a>
                <a href="#">Qaytarish</a>
              </div>
            </div>
            <div className="carts__foter">
              <div className="title__carts">
                <p>Tovarlar katalogi</p>
              </div>
              <div className="links__footer">
                <a href="#">Smartfonlar va telefonlar</a>
                <a href="#">Gadjetlar</a>
                <a href="#">Smartfonlar uchun aksessuarlar</a>
                <a href="#">Tegishli tovarlar</a>
                <a href="#">Soat va aksessuarlar</a>
              </div>
            </div>
            <div className="about_us">
              <div className="title__carts">
                <p>Biz ijtimoiy axborot vositalarida</p>
              </div>
              <div className="logos__footer">
                {LOGO?.map(({ img, id }) => (
                  <a href="#">
                    <img key={id} src={img} alt="img" />
                  </a>
                ))}
              </div>
              <p>Axborot xizmati</p>
              <div className="about__alifshop">
                <p>@alifshop_uz </p>
                <p>+998 555 12 12 12</p>
              </div>
            </div>
          </div>
          <div className="line__footer"></div>
          <div className="about">
            <p>{year} © alifshop.uz</p>
            <img src={yandexImg} alt="yandex img" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
