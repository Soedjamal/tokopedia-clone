import { useFormik } from "formik";
import { uploadProduct } from "../../service/uploadProduct";
import "./style.css";
import { Link } from "react-router-dom";

const UploadProducts = () => {
  const formik = useFormik({
    initialValues: {
      image: null,
      title: "",
      price: "",
      feature: "",
      address: "",
    },
    onSubmit: async (values) => {
      try {
        const product = {
          image: values.image,
          title: values.title,
          price: values.price,
          feature: values.feature,
          address: values.address,
        };
        await uploadProduct(product);
        alert("Product uploaded successfully!");
      } catch (error) {
        console.error("Error uploading product:", error);
        alert("Failed to upload product.");
      }
    },
  });

  return (
    <>
      <div className="navigation m-4 flex justify-between items-center">
        <div className="back-icon items-center gap-6 flex">
          <Link
            className="back w-3 h-3 border-t-2 border-r-2 border-black rotate-[-135deg]"
            to="/"
          ></Link>
          <h2 className="font-bold text-xl">Upload Your Products</h2>
        </div>
        {/* <div className="login"> */}
        {/*   <Link className="text-green-600" to="/login"> */}
        {/*     Masuk */}
        {/*   </Link> */}
        {/* </div> */}
      </div>
      <form
        className="flex flex-col justify-start gap-2 m-2 h-[400px] p-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="border-2 w-full h-[200px] flex flex-col relative items-center border-dashed border-slate-400 bg-slate-200 rounded-lg">
          <label
            className="w-full flex gap-2 items-center text-slate-400 justify-center h-[200px]"
            htmlFor="image"
          >
            <p className="text-2xl">Choose Image</p>
            <i class="bx bxs-file-find text-3xl"></i>
          </label>
          <input
            className="text-center absolute translate-x-[-50%] left-1/2 bottom-[-20%]"
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
        </div>
        <div className="flex flex-col mt-12 m-2 gap-2">
          <label htmlFor="title">Product Name :</label>
          <input
            className="bg-slate-200 w-full px-2 py-1 rounded-md outline-none"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="flex flex-col m-2 gap-2">
          <label htmlFor="price">Price :</label>
          <input
            className="bg-slate-200 w-full px-2 py-1 rounded-md outline-none"
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
        <div className="flex flex-col m-2 gap-2">
          <label htmlFor="feature">Feature :</label>
          <input
            className="bg-slate-200 w-full px-2 py-1 rounded-md outline-none"
            id="feature"
            name="feature"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.feature}
          />
        </div>
        <div className="flex flex-col m-2 gap-2">
          <label htmlFor="price">Address :</label>
          <input
            className="bg-slate-200 w-full px-2 py-1 rounded-md outline-none"
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <button
            className="bg-slate-800 text-white mt-4 w-full px-2 py-2 rounded-lg outline-none"
            type="submit"
          >
            Upload Product
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadProducts;
