import { Card } from "@heroui/react";

const brands = [
    "SunShade",
    "CoolWear",
    "SkinCare+",
    "WalkEasy"
];

const TopBrands = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            <h1 className="text-3xl font-bold text-center mb-10">
                Top Brands
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {brands.map((brand, index) => (
                    <Card
                        key={index}
                        className="p-8 text-center text-xl font-bold shadow-lg rounded-2xl hover:scale-105 transition"
                    >
                        {brand}
                    </Card>
                ))}

            </div>

        </div>
    );
};

export default TopBrands;