import "./style.css";
// import ProductsPromo from "./ProductsPromo";
// Item Dibawah Dynamic View Bjir (Kampret)

export const CardNewProducts = () => {
  return (
    <div className="new-p-card-contain
      w-[300px] h-full border-[1px] bg-slate-50 border-slate-400 rounded-lg flex-shrink-0">
      
      <div className="card-head
        w-full h-[35%] flex items-center border-b border-slate-400">
        
        <div className="card-profile mx-3 w-[50px]">
          <img
            className="w-[50px] h-[50px] rounded-full border-[1px] border-slate-400"
            src=""
            alt=""
          />
        </div>

        <div className="card-head-title w-full flex items-center justify-between pr-3">
          <div className="card-title">
            <h2 className="">Hello World</h2>
            <p>Kota</p>
          </div>
          <div className="next-btn-contain">
            <button className="bg-slate-100 hover:bg-slate-300 flex justify-center items-center border-[1px] border-slate-500 w-8 h-8 rounded-full">
              ⟩
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

const NewProducts = () => {
  return (
    <>
    <div className="new-products-contain my-4">
      <div className="new-products-title items-center my-4 flex justify-between px-5">
        <div className="title-item">
          <h2 className="text-[18px] font-bold">Baru dirilis, nih 💖</h2>
        </div>

        <div className="next-btn-contain">
          <button
            className="bg-slate-100 hover:bg-slate-300 flex justify-center 
          items-center border-[1px] border-slate-500 w-8 h-8 rounded-full"
          >
            ⟩
          </button>
        </div>
      </div>

    </div>

      <div className="new-products-container
        flex h-[200px] w-full items-center px-4">
        <div
          className="new-p-card-container
          flex items-center overflow-x-auto gap-x-4 w-full h-[99%]"
        >
          <CardNewProducts />
          <CardNewProducts />
          <CardNewProducts />
          <CardNewProducts />
        </div>
      </div>
    </>
  );
};

export default NewProducts;
