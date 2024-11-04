import PropTypes from "prop-types";

export default function Card({ product }) {
  return (
    <div className="rounded-xl bg-white p-4">
      <figure className="mb-4">
        <img
          src={product.product_image}
          className="rounded-lg"
        />
      </figure>
      <div className="">
        <h2 className="mb-2 text-xl font-bold">{product.product_title}</h2>
        <p className="mb-4">Price: {product.price} Tk</p>
        <button className="rounded-full border-2 border-[#9538E2] px-6 py-3 font-bold text-[#9538E2]">
          View Details
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
}