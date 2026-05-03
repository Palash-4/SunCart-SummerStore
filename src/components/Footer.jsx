import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-base-200 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/logo.jpg" alt="SunCart logo" width={32} height={32} />
                            <h2 className="text-xl font-bold">SunCart</h2>
                        </div>

                        <p className="text-sm text-gray-600">
                            Your one-stop summer essentials store. Shop sunglasses, outfits,
                            skincare and more with amazing deals.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <p className="text-sm">Email: suncart@gmail.com</p>
                        <p className="text-sm">Phone: +880 1234-567890</p>

                        <div className="flex gap-3 mt-3">
                            <Link href="#">Facebook</Link>
                            <Link href="#">Instagram</Link>
                            <Link href="#">Twitter</Link>
                        </div>
                    </div>

                </div>

                <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

                    <div className="flex gap-4">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;