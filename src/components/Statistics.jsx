import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Statistics() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div>
        <h1>Statistics</h1>
      </div>
    </HelmetProvider>
  )
}
