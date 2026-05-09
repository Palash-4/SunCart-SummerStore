import { Card } from "@heroui/react";
import { FaTint, FaSun, FaGlasses } from "react-icons/fa";

const SummerCareTips = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-center mb-10">
                Summer Care Tips
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center shadow-lg rounded-2xl">
                    <FaTint className="text-4xl mx-auto mb-4 text-blue-500" />
                    <h2 className="text-xl font-semibold mb-2">
                        Stay Hydrated
                    </h2>
                    <p className="text-gray-500">
                        Drink plenty of water to stay fresh during summer.
                    </p>
                </Card>
                <Card className="p-6 text-center shadow-lg rounded-2xl">
                    <FaSun className="text-4xl mx-auto mb-4 text-yellow-500" />
                    <h2 className="text-xl font-semibold mb-2">
                        Use Sunscreen
                    </h2>
                    <p className="text-gray-500">
                        Protect your skin from harmful UV rays.
                    </p>
                </Card>
                <Card className="p-6 text-center shadow-lg rounded-2xl">
                    <FaGlasses className="text-4xl mx-auto mb-4 text-black" />
                    <h2 className="text-xl font-semibold mb-2">
                        Wear Sunglasses
                    </h2>
                    <p className="text-gray-500">
                        Keep your eyes safe and stylish in sunny weather.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default SummerCareTips;