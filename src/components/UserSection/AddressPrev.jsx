import React from "react";

const AddressPrev = () => {
  return (
    <>
      <div className="flex w-full transition-all ease-linear duration-300 px-5 h-[320px] bg-white ">
        <div className="slider">
          <p className="text-sm text-slate-500">
            Biar pengalaman belanjamu lebih baik, pilih alamat dulu.
          </p>
          <div className="address-card-contain flex items-center gap-x-3">
            <div className="address-card py-3 my-4 bg-green-50 border-[1px] border-green-500 rounded-lg w-[220px] h-[130px]">
              <div className="flex items-center gap-x-2">
                <div className="h-5 w-[2px] bg-green-600 rounded-tr-sm rounded-br-sm"></div>
                <h2 className="font-bold text-sm">Rumah</h2>
                <div className="p-1 bg-slate-300 rounded-[4px]">
                  <h2 className="text-[10px]">Utama</h2>
                </div>
              </div>
              <h2 className="username ml-2 font-bold">Soedjamal</h2>
              <div className="phone-contain flex items-center justify-between text-sm text-slate-500 pr-3 pl-2">
                <h2 className="phone-num">0888223445</h2>
                <span className="check mb-2 flex w-1.5 h-3 border-[2px] rounded-[2px] border-l-transparent border-t-transparent border-green-600 rotate-45"></span>
              </div>
              <h2 className="address ml-2 text-sm text-slate-500">
                Wates, Gedong, Patean, Kab. Kendal, Jawa Tengah
              </h2>
            </div>

            <div className="another-address-card flex flex-col justify-center items-center py-3 my-4 bg-white border-[1px] border-slate-500 rounded-lg w-[130px] h-[130px]">
              <div className="prev w-8 h-8 mt-2 rounded-full bg-white border-[1px] border-black"></div>
              <div className="text-green-500 flex flex-col items-center mt-4 leading-[18px] justify-center font-bold">
                <h2>Cek Alamat</h2>
                <h2>Lainnya</h2>
              </div>
            </div>
          </div>

          <hr />

          <div className="another-way my-4">
            <h2 className="font-bold my-2 text-lg">Mau pakai cara lain?</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center ml-2 gap-x-2">
                <i class="bx bx-map text-2xl"></i>
                <div className="title ">
                  <h2 className="font-bold">Pilih Kota & Kecamatan</h2>
                  <p className="text-slate-500 text-sm">
                    Sesuai tujuan pegirimanmu
                  </p>
                </div>
              </div>
              <i class="bx bx-chevron-right text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPrev;
