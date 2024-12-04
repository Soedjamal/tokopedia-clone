import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BottomMenu = () => {
  return (
    <>
      <div className="bottommenu-container shadow-[rgba(0,0,15,0.5)_10px_20px_20px_10px] bg-white pt-2 pb-1 w-full sticky z-20 bottom-0">
        <nav className="flex justify-center">
          <ul className="flex gap-x-16 text-xs">
            <li className="flex flex-col items-center gap-1">
              <i className="bx bxs-home text-2xl mb-4 text-slate-600"></i>
              <Link
                to="/"
                className="link absolute rounded-lg bottom-1 px-1 pt-8"
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col items-center gap-1">
              <i className="bx bxs-badge-check text-2xl text-slate-600"></i>
              <Link
                to="/officialstore"
                className="link absolute rounded-lg bottom-1 px-1 pt-8"
              >
                Official Store
              </Link>
            </li>
            <li className="flex flex-col items-center gap-1">
              <i className="bx bxs-wallet text-2xl text-slate-600"></i>
              <Link
                to="/transaction"
                className="link absolute rounded-lg bottom-1 px-1 pt-8"
              >
                Transaksi
              </Link>
            </li>
            <li className="flex flex-col items-center gap-1">
              <i className="bx bxs-heart text-2xl text-slate-600"></i>
              <Link
                to="/wishlist"
                className="link absolute rounded-lg bottom-1 px-1 pt-8"
              >
                Wishlist
              </Link>
            </li>
            <li className="flex flex-col items-center gap-1">
              <i className="bx bxs-user text-2xl text-slate-600"></i>
              <Link
                to="/login"
                className="link absolute rounded-lg bottom-1 px-1 pt-8"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BottomMenu;
