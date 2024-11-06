import {  useContext, useState } from "react";
import CartItem from "./CartItem";
import { getAllProductsFromCart, removeFromCart } from "..";
import { Context } from "../App";

export default function Cart() {
  const [cartItems, setCartItems] = useState(getAllProductsFromCart());
  const {updateState} = useContext(Context);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    setCartItems(getAllProductsFromCart());
    updateState();
  };


  const handleSortByPrice = () => {
    const sortedCartItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCartItems);
  };

  return (
    <div className="mx-auto w-11/12 max-w-screen-xl">
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">Cart</h2>
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-xl font-bold">
            Total cost: {cartItems.reduce((a, b) => a + b.price, 0)}
          </h2>
          <button
            onClick={handleSortByPrice}
            className="flex gap-2 rounded-full border border-[#9538E2] px-6 py-3 font-bold text-[#9538E2]"
          >
            Sort by Price <img src="../src/assets/sort.svg" alt="" />
          </button>
          <button className="rounded-full bg-[#9538E2] px-6 py-3 text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
}
