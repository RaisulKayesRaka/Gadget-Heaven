import PropTypes from "prop-types";
export default function WishlistItem({
  product,
  handleRemoveFromWishlist,
  handleAddToCart,
}) {
  return (
    <div className="flex w-full justify-between gap-6 rounded-xl bg-white p-6">
      <div className="w-40">
        <img
          src={product.image}
          alt=""
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="mb-3 text-lg font-bold">{product.title}</h3>
        <p className="mb-3">{product.description}</p>
        <p className="font-semibold">Price: {product.price} Tk</p>

        <button
          onClick={() => handleAddToCart(product)}
          className="mt-3 rounded-full bg-[#9538E2] px-6 py-3 text-white"
        >
          Add to Cart
        </button>
      </div>
      <div>
        <button
          onClick={() => handleRemoveFromWishlist(product)}
          className="flex rounded-full border border-red-500 p-1"
        >
          <img src="../src/assets/cancel.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

WishlistItem.propTypes = {
  product: PropTypes.object,
  handleRemoveFromWishlist: PropTypes.func,
  handleAddToCart: PropTypes.func,
};
