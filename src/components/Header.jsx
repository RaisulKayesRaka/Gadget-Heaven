import Navbar from "./Navbar";
import Banner from "./Banner";

export default function Header() {
  return (
    <section>
      <div className="mx-6 mt-6 rounded-t-xl bg-[#9538E2] text-white">
        <Navbar />
      </div>
      <Banner />
    </section>
  );
}
