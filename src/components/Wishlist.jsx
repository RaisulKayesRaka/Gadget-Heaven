import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  return (
    <div className="mx-auto w-11/12 max-w-screen-xl">
        <h2 className="text-xl font-bold my-8">Wishlist</h2>

      <div className="flex flex-col gap-4">
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </div>
  )
}
