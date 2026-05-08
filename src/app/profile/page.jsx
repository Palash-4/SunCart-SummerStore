"use client";
import { UpdateProfileModal } from '@/components/updateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card, Chip, Button } from '@heroui/react';
import { FaEnvelope, FaUser } from "react-icons/fa";

const profilePage = () => {

    const userData = authClient.useSession()
    const user = userData.data?.user
    console.log(user);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

            <Card className="w-full max-w-3xl p-6 rounded-3xl shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">

                    <div className="flex justify-center">
                        <Avatar className='w-30 h-30'>
                            <Avatar.Image alt="John Doe"
                                src={user?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>

                    </div>

                    <div className="space-y-3 text-center md:text-left">

                        <h1 className="text-3xl font-bold">
                            {user?.name}
                        </h1>

                        <p className="text-gray-500">
                            Welcome to SunCart
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                            <FaEnvelope />
                            <span>
                                {user?.email}
                            </span>

                        </div>

                        <Chip color="primary" variant="flat">
                            Customer
                        </Chip>

                    </div>

                </div>

                <div className="border-t my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="border rounded-2xl p-5 bg-white shadow-sm">

                        <div className="flex items-center gap-2 mb-2">

                            <FaUser className="text-primary" />

                            <h3 className="font-semibold text-lg">
                                Full Name
                            </h3>

                        </div>

                        <p className="text-gray-600">
                            {user?.name}
                        </p>
                    </div>
                    <div className="border rounded-2xl p-5 bg-white shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <FaEnvelope className="text-primary" />
                            <h3 className="font-semibold text-lg">
                                Email Address
                            </h3>
                        </div>

                        <p className="text-gray-600 break-all">
                            {user?.email}
                        </p>

                    </div>

                </div>
                <div className='mx-auto'>
                    <UpdateProfileModal></UpdateProfileModal>
                </div>

            </Card>

        </div>
    );
};

export default profilePage;