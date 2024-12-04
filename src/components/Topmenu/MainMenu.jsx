import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import promoImg from "../../images/promoImage";

const MainMenu = () => {
  const [name, setName] = useState(false);
  const nav = useNavigate();

  setTimeout(() => {
    setName(!false);
  }, 3000);

  const handleNav = (path) => {
    nav(path);
  };

  return (
    <>
      <div className="menu bg-slate-100 w-full h-screen">
        <div className="profile-menu p-4 flex items-center justify-between">
          <div className="info-contain flex items-center gap-x-3">
            <div className="photo w-16 h-16 rounded-full bg-slate-200">
              <img src={promoImg.keuangan} alt="" />
            </div>
            <div className="info-user">
              {name ? (
                <div className="username flex items-center gap-2">
                  <i class="bx bxs-user"></i>
                  <h2 className="usern font-semibold text-xl">Soedjamal</h2>
                </div>
              ) : (
                <div className="username flex items-center gap-2">
                  <i class="bx bxs-user"></i>
                  <h2 className="usern font-semibold text-xl">
                    Pagi! Udah sarapan?
                  </h2>
                </div>
              )}

              <div className="payment flex items-center gap-2">
                <i class="bx bxs-wallet-alt"></i>
                <h2 className="pay-title text-sm text-slate-800">
                  Gopay & Gopay Coins belum aktif
                </h2>
              </div>
              <div className="saldo flex items-center gap-2">
                <i class="bx bxs-dollar-circle"></i>
                <h2 className="user-saldo text-sm text-slate-800">Saldo Rp0</h2>
              </div>
            </div>
          </div>
          <div className="settings">
            <i class="bx bx-cog text-2xl text-slate-600"></i>
          </div>
        </div>

        <div className="user-menu flex flex-col items-center w-full px-4 gap-y-2 mb-4">
          <div className="discount-plus w-full flex items-center rounded-lg h-[56px] border-[1px] border-slate-400">
            <div className="open-shop w-full flex px-2 justify-between items-center">
              <div className="flex items-center px-2 gap-x-2">
                <div className="w-8 h-8 bg-slate-200"></div>
                <div className="plus-title">
                  <h2 className="font-bold text-sm">
                    Diskon 80% buat langganan PLUS
                  </h2>
                  <h2 className="text-xs text-slate-500">
                    Spesial buatmu promo terbatas
                  </h2>
                </div>
              </div>
              <i class="bx bx-chevron-right text-2xl"></i>
            </div>
          </div>

          <div className="flex w-full items-center gap-x-2">
            <div
              onClick={() => handleNav("/account")}
              className="open-shop flex p-2 justify-between items-center w-1/2 h-10 rounded-lg border-[1px] border-slate-400"
            >
              <h2 className="font-bold text-sm">Buka Toko</h2>
              <i class="bx bx-chevron-right text-2xl"></i>
            </div>

            <div className="join-affiliate flex p-2 justify-between items-center w-1/2 h-10 rounded-lg border-[1px] border-slate-400">
              <h2 className="font-bold text-sm">Daftar Affiliate</h2>
              <i class="bx bx-chevron-right text-2xl"></i>
            </div>
          </div>
        </div>
        <hr className="border-4 bg-slate-300" />
      </div>
    </>
  );
};

export default MainMenu;
