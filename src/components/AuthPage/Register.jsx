import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../service/usersService/registerUser";

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      username: "",
      password: "",
    },
    validationSchema:
      step === 1
        ? Yup.object({
            emailOrPhone: Yup.string()
              .required("Nomor HP atau E-mail diperlukan")
              .test(
                "is-email-or-phone",
                "Masukkan email atau nomor HP yang valid",
                (value) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  const phoneRegex = /^[0-9]{10,15}$/;
                  return emailRegex.test(value) || phoneRegex.test(value);
                },
              ),
          })
        : Yup.object({
            username: Yup.string()
              .required("Username diperlukan")
              .min(5, "Username harus memiliki setidaknya 5 karakter"),
            password: Yup.string()
              .required("Password diperlukan")
              .min(8, "Password harus memiliki setidaknya 8 karakter"),
          }),
    onSubmit: async (values) => {
      if (step === 1) {
        setStep(2);
      } else {
        setLoading(true);
        setError(null);
        try {
          const dataToSend = {
            emailOrPhone: values.emailOrPhone,
            username: values.username,
            password: values.password,
          };
          await registerUser(dataToSend);
          navigate("/login");
          alert("Registrasi berhasil");
        } catch (err) {
          setError(err.message || "Terjadi kesalahan");
        } finally {
          setLoading(false);
        }
      }
    },
  });

  return (
    <>
      <div className="w-full p-4">
        <div className="navigation flex justify-between items-center">
          <div className="back-icon items-center gap-6 flex">
            <Link
              className="back w-3 h-3 border-t-2 border-r-2 border-black rotate-[-135deg]"
              to="/"
            ></Link>
            <h2 className="font-bold text-xl">Daftar Ke Tokopedia</h2>
          </div>
          <div className="login">
            <Link className="text-green-600" to="/login">
              Masuk
            </Link>
          </div>
        </div>
        <form
          className="w-full mt-6 flex flex-col justify-center"
          onSubmit={formik.handleSubmit}
        >
          {step === 1 ? (
            <>
              <input
                className="border-[1.5px] outline-green-600 border-slate-300 rounded-lg px-3 py-3"
                type="text"
                name="emailOrPhone"
                placeholder="Nomor HP atau E-mail"
                value={formik.values.emailOrPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
                <p className="text-red-500 mx-3 mt-1 text-sm">
                  {formik.errors.emailOrPhone}
                </p>
              ) : (
                <p className="mx-3 mt-1 text-sm text-slate-500">
                  Contoh: email@tokopedia.com
                </p>
              )}
              <button
                className="px-3 py-3 mt-6 rounded-lg bg-slate-200 text-slate-400 font-bold"
                type="submit"
              >
                Daftar
              </button>
            </>
          ) : (
            <>
              <input
                className="border-[1.5px] outline-green-600 border-slate-300 rounded-lg px-3 py-3"
                type="text"
                name="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500 mx-3 mt-1 text-sm">
                  {formik.errors.username}
                </p>
              ) : null}
              <input
                className="border-[1.5px] outline-green-600 border-slate-300 rounded-lg px-3 py-3 mt-4"
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 mx-3 mt-1 text-sm">
                  {formik.errors.password}
                </p>
              ) : null}
              <button
                className="px-3 py-3 mt-6 rounded-lg bg-slate-200 text-slate-400 font-bold"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Daftar"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </>
          )}
        </form>
        <div className="choose text-slate-500 my-6 flex w-full items-center gap-4">
          <hr className="border-[1px] w-full border-slate-300" />
          <p>atau</p>
          <hr className="border-[1px] w-full border-slate-300" />
        </div>
        <button className="border-[1.5px] w-full text-slate-500 font-bold outline-green-600 border-slate-300 py-3">
          Google
        </button>
      </div>
    </>
  );
};

export default Register;
