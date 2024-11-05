import { NavLink } from "react-router-dom";
import { getAllProductsFromCart, getAllProductsFromWishlist } from "..";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const newcart = getAllProductsFromCart();
  const newfavorite = getAllProductsFromWishlist();

  useEffect(() => {
    setCart(newcart);
    setWishlist(newfavorite);
  }, [newcart, newfavorite]);


  return (
    <section className="py-2">
      <div className="navbar mx-auto w-11/12 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-black shadow gap-2"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle bg-white shadow-none">
              <div className="indicator">
                <img src="/src/assets/cart.svg" alt="" className="h-5 w-5" />
                <span className="badge indicator-item badge-sm">{cart.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">{cart.length} Items</span>
                <span className="text-info">Subtotal: {cart.reduce((a, b) => a + b.price, 0)}</span>
                <div className="card-actions">
                  <button className="btn btn-block bg-[#9538E2] text-white">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle bg-white shadow-none">
              <div className="indicator">
                <img src="/src/assets/heart.svg" alt="" className="h-5 w-5" />
                <span className="badge indicator-item badge-sm">{wishlist.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">{wishlist.length} Items</span>
                <span className="text-info">Subtotal: {wishlist.reduce((a, b) => a + b.price, 0)}</span>
                <div className="card-actions">
                  <button className="btn btn-block bg-[#9538E2] text-white">
                    View wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
