import { Helmet, HelmetProvider } from "react-helmet-async";
import Heading from "./Heading";

export default function Statistics() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div>
      <Heading
          title="Statistics"
          description="Check out the statistics of our products to get a deeper understanding of our offerings. Our team of experts is always on the lookout for new and exciting trends."
        />
      </div>
    </HelmetProvider>
  )
}
