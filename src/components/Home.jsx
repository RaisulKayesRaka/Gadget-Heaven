import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
  const categories = useLoaderData();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
    <section>

      <div className="mx-auto mb-24 w-11/12 max-w-screen-xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex gap-6 flex-col sm:flex-row">
          <div>
            <div className="rounded-xl bg-white p-4">
              <Categories categories={categories} />
            </div>
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
    </HelmetProvider>
  );
}
