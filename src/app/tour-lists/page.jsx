"use client"

import React, { useState } from 'react';
import { CiCalendarDate, CiSearch } from 'react-icons/ci';
import { FaHotel, FaPlane, FaShip, FaUser, FaUsers } from 'react-icons/fa';
import { GiPrayer } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { LuChevronRight } from 'react-icons/lu';
import { MdMeetingRoom } from 'react-icons/md';
import Card from '../Components/CardSection/Card';
import Pagination from '../Components/Pagination/Pagination';

const TourLists = () => {

    const [activeTab, setActiveTab] = useState("Hotel");

    const tabs = [
        { name: "Hotel", icon: <FaHotel /> },
        { name: "Umrah", icon: <GiPrayer /> },
        { name: "Flight", icon: <FaPlane /> },
        { name: "Cruise", icon: <FaShip /> },
        { name: "Family Trip", icon: <FaUsers /> },
    ];

    return (
        <div className='text-[#F5F5F5]'>
            <div className='bg-[#2D3E50] text-[#F5F5F5]'>

                <div className='max-w-7xl mx-auto relative'>

                    {/* header  */}
                    <div className='flex items-center justify-center flex-col py-10 md:py-[94px]'>
                        <h2 className='font-bold text-3xl md:text-6xl mb-2'>Tours List</h2>
                        <p className='text-base font-bold'>Home <LuChevronRight className='inline text-2xl' /> Tours List Services <LuChevronRight className='inline text-2xl' /></p>
                    </div>

                    {/* tabs section  */}
                    <div className='md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-32 w-full px-3'>

                        {/* Tabs */}
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`flex items-center gap-2 px-2 md:px-4 py-2 rounded-full border transition text-sm sm:text-base
                                        ${activeTab === tab.name
                                                ? "bg-yellow-400 text-black font-semibold"
                                                : "bg-[#F5F5F5] text-[#2D3E50] hover:bg-yellow-200"
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="transition bg-white text-[#2D3E50] rounded-xl p-4 max-w-6xl mx-auto sm:p-6">
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
                                        <button className="bg-[#F8CB2E] hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-1 text-[#2D3E50] px-6 py-3 rounded-md font-semibold w-full md:w-auto">
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

            </div>
            {/* page contect  */}
            <div className='pt-44 bg-[#F5F5F5] text-[#2D3E50] px-3 lg:px-0'>
                <div className='max-w-7xl mx-auto'>
                    {/* card section  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card, index) => (
                            <Card />
                        ))}
                    </div>
                </div>
                {/* Pagination  */}
                <div className='py-10'>
                    <Pagination />
                </div>
            </div>

        </div>
    );
};

export default TourLists;