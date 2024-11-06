import {  useContext, useState } from "react";
import { addToCart, getAllProductsFromWishlist, removeFromWishlist } from "..";
import WishlistItem from "./WishlistItem";
import { Context } from "../App";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState(getAllProductsFromWishlist());
  const {updateState} = useContext(Context);

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
    setWishlistItems(getAllProductsFromWishlist());
    updateState();
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product);
    setWishlistItems(getAllProductsFromWishlist());
    updateState();
  };
  
  return (
    <div className="mx-auto w-11/12 max-w-screen-xl">
        <h2 className="text-xl font-bold my-8">Wishlist</h2>

      <div className="flex flex-col gap-4">
      {wishlistItems.map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="h-24"></div>
    </div>
  )
}
