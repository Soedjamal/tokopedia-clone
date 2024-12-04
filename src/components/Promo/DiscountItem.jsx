import ProductsPromo from "./ProductsPromo";

const Discount = () => {
  return (
    <div className="discount-contain">
      <div className="discount-title my-4 flex justify-between px-5 items-center">
        <div className="title-item">
          <h2 className="text-[18px] font-bold mb-1">Kejar Diskon Spesial</h2>
          <div className="time-contain flex items-center gap-x-4">
            <h4 className="font-normal text-sm text-slate-500">
              Berakhir dalam
            </h4>
            <div className="w-auto h-6 rounded-full flex items-center pl-1 pr-2 gap-x-1 bg-pink-700">
              <i class="bx bx-time text-white "></i>
              <h2 className="text-white text-sm font-bold">00 : 00 : 00</h2>
            </div>
          </div>
        </div>

        <div className="next-btn-contain">
          <button className="bg-slate-100 hover:bg-slate-300 flex justify-center items-center border-[1px] border-slate-500 w-8 h-8 rounded-full">
            ⟩
          </button>
        </div>
      </div>

      <ProductsPromo />
    </div>
  );
};

export default Discount;
