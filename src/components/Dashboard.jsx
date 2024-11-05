import { NavLink, Outlet } from "react-router-dom";
import Heading from "./Heading";

export default function Dashboard() {
  return (
    <div>
      <Heading
        title="Dashboard"
        description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="flex items-center justify-center gap-6 bg-[#9538E2] pb-8">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white text-[#9538E2] font-bold" : "text-white"}`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${isActive ? "bg-white text-[#9538E2] font-bold" : "text-white"}`
          }
        >
          Wishlist
        </NavLink>
      </div>
      <Outlet />
      <div className="h-24"></div>
    </div>
  );
}
