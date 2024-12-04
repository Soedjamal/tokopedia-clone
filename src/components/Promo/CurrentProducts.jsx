import React from "react";

const CardCurrentProducts = ({ title, imgdir }) => {
  return (
    <>
      <div className="card-cp">
        <div className="product-img w-24 h-24 bg-slate-200 rounded-lg">
          <img src={imgdir} alt="" />
        </div>
        <h2 className="product-name text-xs mt-2">{title}</h2>
      </div>
    </>
  );
};

const CurrentProducts = () => {
  return (
    <>
      <div className="flex flex-col mb-3 mt-4">
        <h2 className="current-pro-title ml-5 text-lg font-bold mb-2">
          Lanjut cek ini, yuk
        </h2>

        <div className="card-cp-container px-5 overflow-x-scroll flex gap-x-[10px]">
          <CardCurrentProducts
            imgdir="../../../public/image/promo/toy.png"
            title="Balik lihat"
          ></CardCurrentProducts>
          <CardCurrentProducts
            imgdir="../../../public/image/promo/cod.png"
            title="Incaranmu"
          ></CardCurrentProducts>
          <CardCurrentProducts
            imgdir="../../../public/image/promo/ticket.png"
            title="Siap dibeli"
          ></CardCurrentProducts>
          <CardCurrentProducts
            imgdir="../../../public/image/promo/seeall.png"
            title="Eksplor lagi"
          ></CardCurrentProducts>
          <CardCurrentProducts
            imgdir="../../../public/image/promo/fashion.png"
            title="Lanjut cari"
          ></CardCurrentProducts>
        </div>
      </div>
    </>
  );
};

export default CurrentProducts;
