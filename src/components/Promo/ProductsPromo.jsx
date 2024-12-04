const CardProductsPromo = () => {
  return (
    <>
      <div
        className="card-product
        rounded-md w-[140px] h-full bg-white"
      >
        <div className="product-img rounded-md w-full h-3/4 bg-slate-100">
          <img src="" alt="" />
        </div>
        <div className="price flex w-full">
          <h1></h1>
        </div>
      </div>
    </>
  );
};
const Banner = () => {
  return (
    <>
      <div
        className="card-product
        rounded-md w-[140px] h-full"
      >
        <div className="flex items-center justify-center w-full h-full object-cover overflow-hidden">
          <img src="../../../public/image/promo/flash-sale.png" alt="" />
        </div>
      </div>
    </>
  );
};

const ProductsPromo = () => {
  return (
    <div className="discount-products-contain bg-orange-200 flex w-full h-[250px] items-center">
      <div className="card-d-product-contain flex pr-3 w-full gap-x-3 h-[88%] overflow-x-auto">
        <Banner></Banner>
        <CardProductsPromo></CardProductsPromo>
        <CardProductsPromo></CardProductsPromo>
        <CardProductsPromo></CardProductsPromo>
        <CardProductsPromo></CardProductsPromo>
      </div>
    </div>
  );
};

export default ProductsPromo;
