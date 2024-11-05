export default function CartItem() {
  return (
    <div className="flex w-full justify-between gap-6 rounded-xl bg-white p-6">
      <div className="w-32">
        <img
          src="../src/assets/banner.jpg"
          alt=""
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="mb-3 text-lg font-bold">Product Name</h3>
        <p className="mb-3">
          Product Description Product Description Product Description Product
          Description
        </p>
        <p className="font-semibold">Price: 0 Tk</p>
      </div>
      <div>
        <button className="flex rounded-full border border-red-500 p-1">
          <img src="../src/assets/cancel.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
