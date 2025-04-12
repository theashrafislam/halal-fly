"use client"

import React, { useState } from 'react';
import { CiCalendarDate, CiSearch } from 'react-icons/ci';
import { FaHotel, FaPlane, FaShip, FaUser, FaUsers } from 'react-icons/fa';
import { GiPrayer } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState("Hotel");

    const tabs = [
        { name: "Hotel", icon: <FaHotel /> },
        { name: "Umrah", icon: <GiPrayer /> },
        { name: "Flight", icon: <FaPlane /> },
        { name: "Cruise", icon: <FaShip /> },
        { name: "Family Trip", icon: <FaUsers /> },
    ];

    return (
        <div className="relative lg:min-h-[700px] w-full text-[#F5F5F5] bg-cover bg-no-repeat bg-center min-h-[100dvh] bg-[url('/hero-section.jpg')]">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text + Content */}
            <div className="pt-20 max-w-7xl mx-auto px-4 flex flex-col justify-center z-10 relative">
                <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl mb-2 sm:mb-4">HALALFLY</h1>
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                        Discover the <br className="hidden sm:block" /> most engaging <br className="hidden sm:block" /> places
                    </h1>
                    <p className="text-lg sm:text-xl font-medium mb-8 sm:mb-10">
                        Less planning — 5,000 trips are ready for you.
                    </p>
                </div>

                {/* Tabs */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-sm sm:text-base
                                    ${activeTab === tab.name
                                        ? "bg-[#A51CBA] text-white font-semibold"
                                        : "bg-[#F5F5F5] text-[#2D3E50] hover:bg-[#A51CBA] hover:text-[#FFFFFF]"
                                    }`}
                            >
                                {tab.icon}
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="transition bg-white text-[#2D3E50] rounded-xl p-4 sm:p-6">
                    {activeTab === "Hotel" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
                            {/* Destination */}
                            <div className='flex flex-col gap-1'>
                                <label className='text-base font-bold flex items-center gap-1'>
                                    <IoLocationSharp className='text-2xl' />
                                    <span>Destination</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="border p-3 rounded-md w-full"
                                />
                            </div>

                            {/* Room Type */}
                            <div className='flex flex-col gap-1'>
                                <label className='text-base font-bold flex items-center gap-1'>
                                    <MdMeetingRoom className='text-2xl' />
                                    <span>Room Type</span>
                                </label>
                                <select className="border p-3 rounded-md w-full">
                                    <option>All Activity</option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="checkIn" className="text-base font-bold flex items-center gap-1">
                                    <CiCalendarDate className="text-2xl" />
                                    <span>Check In</span>
                                </label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    className="border p-3 rounded-md w-full"
                                />
                            </div>

                            {/* Guest */}
                            <div className="flex flex-col gap-1">
                                <label className="text-base font-bold flex items-center gap-1">
                                    <FaUser className="text-2xl" />
                                    <span>Guest</span>
                                </label>
                                <p className='p-3 border rounded-md'>0</p>
                            </div>

                            {/* Search Button */}
                            <div className='flex justify-end w-full'>
                                <button className="bg-[#A51CBA] transition-all duration-300 flex items-center justify-center gap-1 text-[#FFFFFF] px-6 py-3 rounded-md font-semibold w-full md:w-auto">
                                    <CiSearch className='text-2xl' />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="h-[80px] flex items-center justify-center text-center text-[#2D3E50] font-semibold text-lg">
                            🚧 {activeTab} feature is coming soon...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;