"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] h-[60vh] w-full bg-cover bg-center flex items-center rounded-xl shadow-xl">

            <div className="w-full h-full bg-black/50 rounded-xl flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        Summer Sale 50% OFF 
                    </h1>

                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Grab your favorite summer essentials — sunglasses, outfits,
                        skincare, and more at unbeatable prices!
                    </p>

                    <div className="flex gap-4">

                        <Link href="/products">
                            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold">
                                Shop Now
                            </Button>
                        </Link>

                        <Link href="/products">
                            <Button variant="outline" className="text-white border-white">
                                Explore Deals 
                            </Button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;