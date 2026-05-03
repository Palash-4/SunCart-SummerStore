"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(null);
    }, []);

    return (
        <div className="border-b px-2 bg-base-100">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image src="/logo.jpg" alt="logo" width={35} height={35} />
                    <h3 className="font-bold text-xl text-primary">SunCart</h3>
                </div>

                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/profile">My Profile</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link href="/login" className="btn btn-sm btn-outline">Login</Link>
                            <Link href="/register" className="btn btn-sm btn-primary">Register</Link>
                        </>
                    ) : (
                        <>
                            <Image
                                src={user?.image || "/user.png"}
                                alt="user"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                            <button className="btn btn-sm btn-error">Logout</button>
                        </>
                    )}
                </div>

            </nav>
        </div>
    );
};

export default Navbar;