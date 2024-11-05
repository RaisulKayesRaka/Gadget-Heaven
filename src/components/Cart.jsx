import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="mx-auto w-11/12 max-w-screen-xl">
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">Cart</h2>
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-xl font-bold">Total cost: 0</h2>
          <button className="flex gap-2 rounded-full border border-[#9538E2] px-6 py-3 font-bold text-[#9538E2]">
            Sort by Price <img src="../src/assets/sort.svg" alt="" />
          </button>
          <button className="rounded-full bg-[#9538E2] px-6 py-3 text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
