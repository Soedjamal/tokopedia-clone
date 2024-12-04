import "./style.css";

export default function Credits() {
  return (
    <>
      <h2 className="text-[18px] font-bold mb-4 ml-5">Isi pulsa, yuk!</h2>
      <div className="credit-card-contain relative w-full h-[300px] mb-0 flex items-center justify-center flex-col">
        <div className="credits-img flex justify-center w-full h-auto relative top-0">
          <img src="../../../public/image/pulsa/pulsa.jpg" alt="" />
        </div>
        <div className="card-wrap flex flex-col mb-5 h-auto">
          <div className="credit-card-group flex gap-2">
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/telkom.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">Telkomsel</h2>
            </div>
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/xl.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">XL</h2>
            </div>
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/im3.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">Indosat</h2>
            </div>
          </div>
          <div className="credit-card-group flex mt-2 gap-2">
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/axis.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">Axis</h2>
            </div>
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/tri.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">Tri</h2>
            </div>
            <div className="credit-card bg-white flex flex-col items-center justify-center object-cover overflow-hidden w-[130px] h-[90px] rounded-lg">
              <div className="icon-prov bg-white flex justify-center items-center rounded-xl p-1 w-9 h-9 mt-5">
                <img src="../../../public/image/pulsa/smartf.png" alt="" />
              </div>
              <h2 className="font-bold mt-1">Smartfren</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
