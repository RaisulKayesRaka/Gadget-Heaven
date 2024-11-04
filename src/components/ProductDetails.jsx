import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import ReactStars from "react-rating-stars-component";

export default function ProductDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data.find((product) => product.id === parseInt(id)));
  }, [data, id]);

  return (
    <div>
      <Heading
        title="Product Details"
        description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="relative">
        <div className="mx-auto max-w-screen-lg rounded-2xl bg-white p-4">
          <div className="flex items-center justify-center">
            <div className="flex-1">
              <img src={product.image} alt=""/>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
              <p className="text-lg font-semibold mb-4">Price: {product.price} Tk</p>
              <span
                className={`${product.availability ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"} rounded-full border px-2 py-1`}
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
              <p className="my-4">{product.description}</p>
              <h4 className="font-bold mb-2">Specification:</h4>
              <ol className="mb-4">
                {product.Specification?.map((spec, index) => (
                  <li key={index}>
                    {index + 1}. {spec}
                  </li>
                ))}
              </ol>
              <h4 className="font-bold mb-2">Rating ⭐</h4>
              <div className="flex items-center gap-4 mb-4">
                <ReactStars
                  count={5}
                  value={product.rating}
                  size={24}
                  edit={false}
                />

                <span className="rounded-full bg-gray-100 px-4 py-1">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex gap-2 rounded-full bg-[#9538E2] px-6 py-3 font-bold text-white">
                  Add to Cart <img src="../src/assets/cart-white.svg" alt="" />
                </button>
                <button className="rounded-full border bg-white p-3 font-bold aspect-square">
                  <img src="../src/assets/heart.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 grid h-full w-full grid-rows-3">
          <div className="row-span-1 bg-[#9538E2]"></div>
          <div className="row-span-2"></div>
        </div>
        <div className="h-24"></div>
      </div>
    </div>
  );
}
