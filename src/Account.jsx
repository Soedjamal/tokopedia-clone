import { defaults } from "autoprefixer";
import UploadProducts from "./components/AccountPage/UploadProducts";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <UploadProducts></UploadProducts>
      <Link className="absolute top-1 right-1 p-3 font-bold" to="/register">
        Register
      </Link>
    </>
  );
};

export default Account;
