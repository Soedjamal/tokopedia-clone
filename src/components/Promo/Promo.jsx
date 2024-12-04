import "./style.css";
import MainServiceItem from "./ServiceItem";
import Credits from "./Credits";
import NewProducts from "./NewProducts";
import Discount from "./DiscountItem";
import CurrentProducts from "./CurrentProducts";
import TopProducts from "./TopProducts.jsx";

const PromoMenu = () => {
  return (
    <>
      <div className="promo-container w-full">
        <div className="promo-images-contain mb-3">
          <div className="promo-images w-full h-[140px] ">
            <img
              src="../../../public/image/banner/banner88.jpg"
              alt=""
              className="promo-images w-full h-[140px] object-cover"
            />
          </div>
        </div>

        <div className="service-contain w-auto flex flex-col gap-y-4 overflow-x-auto">
          <MainServiceItem />
        </div>

        <CurrentProducts />

        {/* <div className="coupon-contain mt-8"> */}
        {/*   <h2 className="text-[18px] font-bold ml-5 mb-4"> */}
        {/*     Kupon Buat Pengguna Baru 💝 */}
        {/*   </h2> */}
        {/*   <div className="coupon-card flex justify-center"> */}
        {/*     <div className="coupon rounded-lg bg-slate-300 w-[90%] h-[115px]"></div> */}
        {/*   </div> */}
        {/* </div> */}

        <div className="dicount-products-container">
          <Discount></Discount>
        </div>

        <div className="credit-promo mt-5">
          <Credits></Credits>
        </div>

        <div className="top-products-container mt-8">
          <TopProducts></TopProducts>
        </div>
        {/* <div className="new-realesed-products"> */}
        {/*   <NewProducts></NewProducts> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default PromoMenu;
