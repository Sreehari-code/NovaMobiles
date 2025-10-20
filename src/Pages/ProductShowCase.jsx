import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAdminCartStore } from "./CartStorage";
import { useUserdataStore } from "./SigninStore";
import { useCustomerStore } from "./CustomerToAdminStorage";

export default function ProductShowCase() {
  const { id } = useParams();
  const location = useLocation();
  const { img, name, about } = location.state || {};
  const navigate = useNavigate();

  const setCart = useAdminCartStore((state) => state.setCart);
  const setAdmin = useCustomerStore((state) => state.setAdmin);
  const username = useUserdataStore((state) => state.username);

  function AddtoCart() {
    alert("Item Added to Cart");
    setCart({ img, name, about });
  }

  function buy() {
    console.log("username:", username);
    if (username || username.trim() !== "") {
      alert("Buying Request Sent");
      setAdmin({ img, name, about });
    } else {
      navigate("/signin");
    }
  }

  return (
    <div className="p-10">
      {img ? (
        <div className="flex flex-col items-center">
          <img src={img} alt={name} className="w-80 h-auto shadow-2xl" />
          <h1 className="text-2xl font-bold mt-4">{name}</h1>
          <p className="text-gray-700 mt-2 text-center">{about}</p>
          <div className="flex gap-4 mt-6">
            <button onClick={AddtoCart} className="border p-3 bg-amber-400 rounded-2xl">
              Add to Cart
            </button>
            <button onClick={buy} className="border p-3 bg-amber-500 rounded-2xl">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">
          No product data found for ID: {id}
        </p>
      )}
    </div>
  );
}
