import React, { useState } from "react";
import AddressPrev from "./AddressPrev";
import "./style.css";

const InfoUser = () => {
  const [adr, setAdr] = useState(false);
  const handleMenu = () => {
    setAdr(!adr);
  };

  return (
    <>
      <div className="user-info mx-3 mb-2 flex flex-col gap-y-2">
        <div className="user-address flex items-center gap-x-2">
          <i className="bx bxs-been-here text-green-700 text-lg"></i>
          <p className="text-sm flex gap-x-1">
            Dikirim ke <h2 className="text-sm font-bold">Rumah Soedjamal</h2>
          </p>
          <i onClick={handleMenu} className="bx bx-chevron-down text-xl"></i>
        </div>

        <div className="user-preference flex items-center justify-between">
          <div className="payment-set flex gap-x-2 items-center">
            <div className="logo w-7 h-7">
              <img src="../../../public/image/userpref/gopay.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="gopay-coins text-sm font-bold">Gopay & Coins</h2>
              <h2 className="text-[11px] font-bold text-green-600">Aktifkan</h2>
            </div>
          </div>
          <p className="text-slate-300 text-4xl font-thin">|</p>
          <div className="discount flex gap-x-2 items-center">
            <div className="logo w-7 h-7">
              <img src="../../../public/image/userpref/plus.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="gopay-coins text-sm font-bold">Diskon 80%</h2>
              <h2 className="text-[11px] font-bold text-green-600">
                Cuma 10rb/bln
              </h2>
            </div>
          </div>
          <p className="text-slate-300 text-4xl font-thin">|</p>
          <div className="user-level flex gap-x-2 items-center">
            <div className="logo w-7 h-7">
              <img
                src="../../../public/image/userpref/rewards_silver.png"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h2 className="gopay-coins text-sm font-bold">Silver</h2>
              <h2 className="text-[11px] text-slate-500">12 Kupon Baru</h2>
            </div>
          </div>
        </div>
      </div>
      {adr ? (
        <>
          <div
            onClick={handleMenu}
            className="absolute top-0 z-[99] w-full h-screen bg-gray-900 opacity-60"
          >
            {" "}
          </div>
          <div className="addr-on z-[100] w-full">
            <div className="menu-title rounded-t-lg bg-white gap-2 p-2 flex items-center ">
              <i onClick={handleMenu} class="bx bx-x text-4xl font-normal"></i>
              <h2 className="font-bold text-xl">Mau kirim belanjaan kemana?</h2>
            </div>
            <AddressPrev />
          </div>
        </>
      ) : (
        <>
          <div className="addr-off z-[100] w-full">
            <div className="menu-title rounded-t-lg bg-white gap-2 p-2 flex items-center ">
              <i onClick={handleMenu} class="bx bx-x text-4xl font-normal"></i>
              <h2 className="font-bold text-xl">Mau kirim belanjaan kemana?</h2>
            </div>
            <AddressPrev />
          </div>
        </>
      )}
    </>
  );
};

export default InfoUser;
