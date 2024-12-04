import { useState } from "react";
import MainMenu from "./MainMenu";
import "./style.css";

const TopMenu = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="navbar-container z-[20] border-b border-[1px] border-slate-300 sticky top-0 bg-white flex justify-between items-center px-3 py-2">
        <div className="search-box border-[1px] flex items-center gap-x-1 rounded-lg py-[6px] pl-2 border-slate-300">
          <i class="bx bx-search text-slate-500"></i>
          <input
            className="outline-none"
            placeholder="Cari di Tokopedia"
            type="text"
          />
        </div>
        <div className="menu-items flex gap-x-4">
          <i className="bx bx-envelope text-2xl text-slate-600"></i>
          <i className="bx bx-bell text-2xl text-slate-600"></i>
          <i className="bx bx-cart-alt text-2xl text-slate-600"></i>
          <i
            onClick={handleMenu}
            className="bx bx-menu text-2xl text-slate-600"
          ></i>
        </div>
      </div>

      {menu ? (
        <div className="menu-active z-[100] w-full">
          <div className="absolute top-0 z-[100] w-full ">
            <div className="menu-title bg-slate-100 gap-2 p-2 flex items-center border-b-slate-300 border-[0.5px]">
              <i onClick={handleMenu} class="bx bx-x text-4xl font-normal"></i>
              <h2 className="font-bold text-xl">Menu Utama</h2>
            </div>
            <MainMenu />
          </div>
        </div>
      ) : (
        <div className="menu-close z-[100] w-full">
          <div className="absolute top-0 z-0 w-full">
            <div className="menu-title bg-slate-100 gap-2 p-2 flex items-center border-b-slate-300 border-[0.5px]">
              <i onClick={handleMenu} class="bx bx-x text-4xl font-normal"></i>
              <h2 className="font-bold text-xl">Menu Utama</h2>
            </div>
            <MainMenu />
          </div>
        </div>
      )}
    </>
  );
};
export default TopMenu;
