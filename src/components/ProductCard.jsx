import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
    return (
        <Card className="group p-3 shadow-md hover:shadow-2xl transition duration-300 rounded-2xl">

            <div className="relative w-[160px] h-[160px] overflow-hidden rounded-xl">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover object-center"
                />
            </div>

            <div className="mt-4 space-y-2">

                <h2 className="font-semibold text-lg line-clamp-1">
                    {data.name}
                </h2>

                <p className="text-yellow-500 text-sm font-medium">
                    <FaStar /> {data.rating} / 5
                </p>

                <p className="font-bold text-lg text-primary">
                    ${data.price}
                </p>

                <Link
                    href={`/products/${data.id}`}
                    className="block text-center mt-3 bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition"
                >
                    View Details
                </Link>

            </div>

        </Card>
    );
};

export default ProductCard;