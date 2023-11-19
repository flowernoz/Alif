import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import "./Home.css";
import data from "../../static/alldata";
import Carts from "../../components/Carts/Carts";
import Logos from "../../components/logos/Logos";
import CatalogCarousel from "../../components/CatalogCarousel/CatalogCarousel";
function Home() {
  let Smartfon = data.filter((i) => i.type === "Smartfon va gadjetlar");
  let Noutbuklar = data.filter((i) => i.type === "Noutbuklar, kompyuterlar");
  let Uy = data.filter((i) => i.type === "Uy uchun texnika");
  let Soglik = data.filter((i) => i.type === "Go'zallik va sog'liq");
  let Aqlli = data.filter((i) => i.type === "Aqlli uy");
  return (
    <div className="Home">
      <HomeCarousel />
      <CatalogCarousel />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Chegirmalar 🔥"}
        data={Smartfon}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Sizni qiziqtirishi mumkin "}
        data={Noutbuklar}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Uy uchun texnika "}
        data={Uy}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Go'zallik va sog'liq "}
        data={Soglik}
      />
      <Carts
        moreLink={"Hammasini ko'rish"}
        componentName={"Aqlli uy"}
        data={Aqlli}
      />
      <Logos />
    </div>
  );
}

export default Home;
