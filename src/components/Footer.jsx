
export default function Footer() {
  return (
    <section className="bg-white">
        <div className="mx-auto w-11/12 max-w-screen-xl py-24">
        <h2 className="text-2xl text-center font-bold mb-3">Gadget Heaven</h2>
        <p className="mb-6 text-center">Leading the way in cutting-edge technology and innovation.</p>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
            <div className="text-center">
                <h3 className="font-bold mb-2">Services</h3>
                <ul>
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div className="text-center">
                <h3 className="font-bold mb-2">Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="text-center">
                <h3 className="font-bold mb-2">Legal</h3>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
    </div>
    </section>
  )
}