import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full px-4 py-2">
        <div className="navigation flex justify-between items-center">
          <div className="back-icon items-center gap-6 flex">
            <Link
              className="back w-3 h-3 border-t-2 border-r-2 border-black rotate-[-135deg]"
              to="/"
            ></Link>
            <h2 className="font-bold text-xl">Masuk Ke Tokopedia</h2>
          </div>
          <div className="login">
            <Link className="text-green-600" to="/register">
              Daftar
            </Link>
          </div>
        </div>
        <form className="w-full mt-6 flex flex-col justify-center" action="">
          <input
            className="border-[1.5px] outline-green-600 border-slate-300 rounded-lg px-3 py-3"
            type="email"
            placeholder="Nomor HP atau E-mail"
          />
          <p className="mx-3 mt-1 text-sm text-slate-500">
            Contoh: 08123456789
          </p>
          <div className="help flex justify-end mt-4">
            <Link className="text-green-600 text-sm" to="/">
              Butuh bantuan?
            </Link>
          </div>
          <Link
            className="px-3 py-3 mt-4 text-center rounded-lg bg-slate-200 text-slate-400 font-bold"
            to="/account"
          >
            Lanjut
          </Link>
        </form>
        <div className="choose text-sm text-slate-500 my-6 flex w-full items-center gap-4">
          <hr className="border-[1px] w-full border-slate-300" />
          <p>atau</p>
          <hr className="border-[1px] w-full border-slate-300" />
        </div>
        <button
          className="border-[1.5px] w-full text-slate-400 font-bold outline-green-600 border-slate-300 rounded-lg px-3 py-3"
          type="submit"
          placeholder="Nomor HP atau E-mail"
        >
          Masuk Dengan Google
        </button>
        <div className="login flex items-center gap-2 justify-center mt-4">
          <h2>Belum punya akun?</h2>
          <Link className="text-green-600" to="/register">
            Daftar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
