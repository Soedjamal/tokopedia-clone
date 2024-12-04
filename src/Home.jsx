import "./App.css";
import TopMenu from "./components/Topmenu/Topmenu.jsx";
import InfoUser from "./components/UserSection/InfoUser.jsx";
import PromoMenu from "./components/Promo/Promo.jsx";
import NavMenuProducts from "./components/MainProducts/NavbarProducts.jsx";
import CardProducts from "./components/MainProducts/CardProducts.jsx";
import BottomMenu from "./components/BottomMenu/BottomMenu.jsx";
import "./index.css";

const Home = () => {
  return (
    <div className="main-container">
      <TopMenu />
      <InfoUser />
      <PromoMenu />
      <NavMenuProducts />
      <CardProducts></CardProducts>
      <BottomMenu />
    </div>
  );
};

export default Home;
