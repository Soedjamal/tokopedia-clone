import { Link } from "react-router-dom";
import "./style.css";

const NavMenuProducts = () => {
  return (
    <>
      <div className="navproduct-container bg-white pl-5 my-5 pt-4 w-full sticky z-10 top-[57px] shadow-md">
        <nav className="flex">
          <ul className="flex overflow-x-scroll gap-x-6">
            <li>
              <Link className="nav-link" to="">
                For You
              </Link>
              <div className="line"></div>
            </li>
            <li>
              <Link className="nav-link" to="">
                Guncang 8.8
              </Link>
              <div className="line"></div>
            </li>
            <li>
              <Link className="nav-link" to="">
                Susu & Olahan Susu
              </Link>
              <div className="line"></div>
            </li>
            <li>
              <Link className="nav-link" to="">
                Make Up Wajah
              </Link>
              <div className="line"></div>
            </li>
            <li>
              <Link className="nav-link" to="">
                Aksesoris Dapur
              </Link>
              <div className="line"></div>
            </li>
            <li>
              <Link className="nav-link" to="">
                Mirip yang kamu cek
              </Link>
              <div className="line"></div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavMenuProducts;
