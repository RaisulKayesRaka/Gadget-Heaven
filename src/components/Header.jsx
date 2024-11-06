import Navbar from "./Navbar";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <header>
          <div className="mx-6 mt-6 rounded-t-xl bg-[#9538E2] text-white">
            <Navbar />
          </div>
          <Banner />
        </header>
      ) : (
        <header className="mx-6 mt-6">
          <Navbar /> 
        </header>
      )}
    </>
  );
}
