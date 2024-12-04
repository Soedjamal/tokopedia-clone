import React from "react";

const CardTopProduct = () => {
  return (
    <>
      <div className="card-product border-[1px] border-slate-400 w-full h-[240px] rounded-lg">
        <div className="top-products-image h-[80%] rounded-t-lg bg-slate-200">
          <img src="" alt="" />
        </div>
        <div className="top-products-title p-2 h-[20%] rounded-b-lg ">
          <h2 className="text-sm font-bold leading-4">Motherboard AMD</h2>
          <p className="text-sm font-light flex gap-1">
            Diskon Hingga <h2 className="text-sm font-bold"> 80%</h2>
          </p>
        </div>
      </div>
    </>
  );
};

const TopProducts = () => {
  return (
    <>
      <h2 className="text-[18px] ml-5 font-bold ">Promo Produk Unggulan</h2>
      <div className="flex">
        <div className="card-top-product w-full gap-2 px-5 grid grid-cols-2 py-5">
          <CardTopProduct></CardTopProduct>
          <CardTopProduct></CardTopProduct>
          <CardTopProduct></CardTopProduct>
          <CardTopProduct></CardTopProduct>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
