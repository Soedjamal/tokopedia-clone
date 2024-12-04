import { useEffect, useState } from "react";
import { getProducts } from "../../service/productApi";

const CardProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Data has Gone😅, Databasemu Modar Bro..");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center m-8 bg-slate-100 rounded-lg p-2 text-slate-800">
        {error}
      </p>
    );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="card flex z-50 justify-center items-center w-auto">
      <div className="grid md:grid-cols-4 grid-cols-2 px-2 gap-2 w-full h-auto">
        {products.map((product) => (
          <div key={product.id} className="card-products-item">
            <div className="card-images w-[200px] h-[200px]">
              <img
                src={product.image}
                alt=""
                className="border-[1p] object-cover rounded-md border-slate-400 h-full w-full"
              />
            </div>
            <div className="card-title mt-[4px] font-normal text-slate-800">
              <h2>{product.title}</h2>
            </div>
            <div className="card-price">
              <h1 className="font-bold text-lg">
                {formatPrice(product.price)}
              </h1>
            </div>
            <div className="card-info">
              <p className="text-orange-500 text-xs font-bold">
                {product.feature}
              </p>
              <div className="info-rating items-center flex text-[13px] text-slate-500">
                <i className="bx bxs-star text-xs mr-1"></i>
                <p className="mr-2">4,8</p>
                <p>N/A terjual</p>
              </div>
              <div className="info-location items-center flex text-[13px] text-slate-500">
                <i className="bx bxs-been-here text-xs mr-1"></i>
                <h2>{product.address}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
