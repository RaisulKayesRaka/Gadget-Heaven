export default function Navbar() {
  return (
    <section className="py-2">
      <div className="navbar mx-auto max-w-screen-xl w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow text-black"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle"
            >
              <div className="indicator">
              <img src="/src/assets/cart.svg" alt="" className="h-5 w-5"/>
                <span className="badge indicator-item badge-sm">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-[#9538E2] text-white btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle"
            >
              <div className="indicator">
                <img src="/src/assets/heart.svg" alt="" className="h-5 w-5"/>
                <span className="badge indicator-item badge-sm">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-[#9538E2] text-white btn-block">
                    View cart
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
