import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ViewDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch("https://sun-cart-summer-store.vercel.app/product.json");
    const data = await res.json();
    const product = data.find((p) => p.id == id);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">

                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover"
                    />

                </div>
                <div className="space-y-5">

                    <span className="inline-block bg-orange-100 px-4 py-2 rounded-full text-sm font-medium">
                        {product.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        {product.name}
                    </h1>
                    <p className="text-lg text-gray-500">
                        Brand: {product.brand}
                    </p>
                    <div className="flex items-center gap-2 text-yellow-500 font-medium">
                        <FaStar />
                        <span>{product.rating} / 5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary">
                        ${product.price}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>
                    <div>
                        <span className="font-semibold">
                            Stock Available :
                        </span>

                        <span className="ml-2 bg-orange-100 px-3 py-1 rounded-full text-sm">
                            {product.stock}
                        </span>
                    </div>
                    <button className="text-white px-6 py-3 rounded-xl bg-gray-400 w-full sm:w-auto">
                        Buy Now
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ViewDetails;