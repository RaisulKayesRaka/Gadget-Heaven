import toast from "react-hot-toast";

const getAllProductsFromCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

const addToCart = (product) => {
    const cart = getAllProductsFromCart();

    if (cart.find((item) => item.id == product.id)) {
        return toast.error("Product already in cart");
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product successfully added to cart");
};

const removeFromCart = (product) => {
    const cart = getAllProductsFromCart();
    const remainingCart = cart.filter((item) => item.id != product.id);
    localStorage.setItem("cart", JSON.stringify(remainingCart));
    toast.success("Product successfully removed from cart");
};

const getAllProductsFromWishlist = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
}

const addToWishlist = (product) => {
    const wishlist = getAllProductsFromWishlist();

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Product successfully added to wishlist");
};

const removeFromWishlist = (product) => {
    const wishlist = getAllProductsFromWishlist();
    const remainingWishlist = wishlist.filter((item) => item.id != product.id);
    localStorage.setItem("wishlist", JSON.stringify(remainingWishlist));
    toast.success("Product successfully removed from wishlist");
};

export {addToCart, addToWishlist, getAllProductsFromCart, getAllProductsFromWishlist, removeFromCart, removeFromWishlist};