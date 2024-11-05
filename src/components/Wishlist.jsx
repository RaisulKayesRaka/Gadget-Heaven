import { useState } from "react";
import { addToCart, getAllProductsFromWishlist, removeFromWishlist } from "..";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState(getAllProductsFromWishlist());

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
    setWishlistItems(getAllProductsFromWishlist());
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product);
    setWishlistItems(getAllProductsFromWishlist());
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
    </div>
  )
}
