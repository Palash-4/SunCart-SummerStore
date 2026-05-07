import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
    return (
        <Card className="group p-3 sm:p-4 shadow-md hover:shadow-2xl transition duration-300 rounded-2xl">

            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-xl">
                <Image
                    src={data.image}
                    
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={data.name}
                    className="object-cover object-center"
                />
                <Chip size="sm" className="absolute top-2 right-2 " >{data.category}</Chip>

            </div>

            <div className="mt-4 space-y-2">

                <h2 className="font-semibold text-lg line-clamp-1">
                    {data.name}
                </h2>

                <p className="text-yellow-500 text-sm font-medium flex gap-1">
                    <FaStar /> {data.rating} / 5
                </p>

                <p className="font-bold text-lg text-primary">
                    ${data.price}
                </p>

                <Link
                    href={`/products/${data.id}`}
                    className="block text-center mt-3 bg-gray-400 text-white py-2 rounded-xl hover:bg-gray-800 transition"
                >
                    View Details
                </Link>

            </div>

        </Card>
    );
};

export default ProductCard;