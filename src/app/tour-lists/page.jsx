"use client"

import React, { useState } from 'react';
import { CiCalendarDate, CiSearch } from 'react-icons/ci';
import { FaCaretDown, FaHotel, FaPlane, FaSearchPlus, FaShip, FaStar, FaUser, FaUsers } from 'react-icons/fa';
import { GiPrayer } from 'react-icons/gi';
import { IoClose, IoFilter, IoLocationSharp } from 'react-icons/io5';
import { LuChevronRight, LuChevronsUpDown } from 'react-icons/lu';
import { MdMeetingRoom } from 'react-icons/md';
import Card from '../Components/CardSection/Card';
import Pagination from '../Components/Pagination/Pagination';
import Subscribe from '../Components/SubScribe/Subscribe';
import { LiaThListSolid, LiaThSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";

const TourLists = () => {

    const [IsOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Hotel");
    const [value, setValue] = useState(30);

    const tabs = [
        { name: "Hotel", icon: <FaHotel /> },
        { name: "Umrah", icon: <GiPrayer /> },
        { name: "Flight", icon: <FaPlane /> },
        { name: "Cruise", icon: <FaShip /> },
        { name: "Family Trip", icon: <FaUsers /> },
    ];


    const min = 30;
    const max = 350;

    const handleChange = (e) => {
        setValue(Number(e.target.value));
    };

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

            </div>

            {/* page contect  */}
            <div className='pt-44 bg-[#F5F5F5] text-[#2D3E50] px-3 lg:px-0'>

                {/* sort  header  */}
                <div className='max-w-7xl mx-auto mb-20 lg:flex flex-col lg:flex-row items-start lg:items-center justify-between pb-2 border-b-2 border-[#E6E6E6] hidden'>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2'>
                        <h5 className='text-[32px] font-bold'>10 Tours found</h5>
                        <p className='text-sm text-[#008DD0]'>Clear filter</p>
                    </div>
                    {/* advance search  btn  */}
                    <button onClick={() => setIsOpen(true)} className='flex items-center gap-2 mt-2 lg:hidden p-3 btn-primary '>
                        <FaSearchPlus className='text-xl' />
                        <span className='text-base font-bold'>Advanced Search</span>
                    </button>

                    <div className='lg:flex items-center gap-6 hidden'>
                        <div className='flex items-center gap-2'><span className='text-base font-bold'>Sort by</span><LuChevronsUpDown className='text-2xl' /></div>
                        <div className='flex items-center gap-2'><LiaThListSolid className='text-3xl' /><LiaThSolid className='text-3xl' /></div>
                    </div>
                </div>
                {/* for mobile version  */}
                <div className='max-w-7xl mx-auto mb-20 lg:hidden'>
                    <h1 className='text-[45px] font-semibold pb-[38px]'>Activities of Makkah</h1>
                    <p>An enim nullam tempor sapien gravida donec enim ipsum</p>
                    <div className='grid grid-cols-3 gap-3 mt-[38px]'>
                        {['Category', 'Availability', 'Duration', 'Category'].map((item, index) => (
                            <div key={index} className='flex items-center justify-between bg-[#D8CBCB] p-3 rounded-full'>
                                <span className='text-[10px] font-semibold'>{item}</span>
                                <FaCaretDown />
                            </div>
                        ))}
                    </div>
                    <div className='text-[#807676] flex flex-col gap-3 mt-[38px]'>
                        <div className='bg-[#D8CBCB] p-3 rounded-full'>60 Recommendations</div>
                        <div className='flex items-center justify-between bg-[#D8CBCB] p-3 rounded-full'><span>Recently Selected</span><IoFilter /></div>
                    </div>
                </div>

                {/* main contant  */}
                <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 pb-20'>

                    {/* sidebar content  */}
                    <div className='w-full lg:w-[60%] h-auto p-4 self-start border-2 rounded-xl border-[#E6E6E6] hidden lg:block'>
                        {/* search tour  */}
                        <div>

                            <h1 className='text-xl font-bold border-b-2 pb-2 border-[#E6E6E6]'>Search Tours</h1>
                            <div className='border-b-2 border-[#E6E6E6]'>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Landscape View</span><SlArrowDown /></h1>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Traveler Type</span><SlArrowDown /></h1>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Special Offers</span><SlArrowDown /></h1>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Acommondation</span><SlArrowDown /></h1>
                            </div>

                            {/* filter price  */}
                            <div className='border-b-2 border-[#E6E6E6] pb-5'>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Filter Price</span><IoIosArrowUp className='text-2xl' /></h1>

                                {/* Slider input */}
                                <input
                                    type="range"
                                    min={min}
                                    max={max}
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full h-2 bg-primary-color rounded-lg appearance-none cursor-pointer"
                                />
                                {/* Price labels */}
                                <div className="flex justify-between">
                                    <div className="px-3 py-1 bg-primary-color text-white rounded-md text-sm font-medium">
                                        $ {min}.0
                                    </div>
                                    <div className="px-3 py-1 bg-primary-color text-white rounded-md text-sm font-medium">
                                        $ {value}.0
                                    </div>
                                </div>
                            </div>

                            {/* hotel review  */}
                            <div>
                                <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Hotel Review</span><SlArrowDown /></h1>
                                <div className="flex flex-col space-y-4 pb-5 border-b-2 border-[#E6E6E6]">
                                    {/* 5 Stars */}
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-5 h-5 border border-gray-300 mr-2" />
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={'w-6 h-6 text-yellow-400'} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* 4 Stars */}
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-5 h-5 border border-gray-300 mr-2" />
                                        <div className="flex">
                                            {[...Array(4)].map((_, i) => (
                                                <FaStar key={i} className={'w-6 h-6 text-yellow-400'} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* 3 Stars */}
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-5 h-5 border border-gray-300 mr-2" />
                                        <div className="flex">
                                            {[...Array(3)].map((_, i) => (
                                                <FaStar key={i} className={'w-6 h-6 text-yellow-400'} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2 Stars */}
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-5 h-5 border border-gray-300 mr-2" />
                                        <div className="flex">
                                            {[...Array(2)].map((_, i) => (
                                                <FaStar key={i} className={'w-6 h-6 text-yellow-400'} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* 1 Star */}
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-5 h-5 border border-gray-300 mr-2" />
                                        <div className="flex">
                                            <FaStar className={'w-6 h-6 text-yellow-400'} />
                                        </div>
                                    </div>
                                </div>

                                {/* Trip Type */}
                                <div>
                                    <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Trip Type</span><SlArrowDown /></h1>

                                    <div className='pb-5 border-b-2 border-[#E6E6E6] flex flex-col space-y-4'>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>City trips</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Ecotourism</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Escorted tour</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Group tour</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Hosted tours</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Ligula</span></div>
                                    </div>

                                </div>

                                {/* Flight Options */}
                                <div>
                                    <h1 className='flex items-center justify-between py-5'><span className='text-base font-bold'>Flight Options</span><SlArrowDown /></h1>

                                    <div className='pb-5 border-b-2 border-[#E6E6E6] flex flex-col space-y-4'>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Direct Flights</span></div>

                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Economy</span></div>
                                        <div className='flex items-center gap-2'><input type="checkbox" name="" id="" className="w-5 h-5 border border-gray-300" /><span className='text-base'>Business Class</span></div>
                                    </div>
                                </div>
                                {/* search btn  */}
                                <div className='w-[100%] pt-5'>
                                    <button className="bg-[#A51CBA] flex items-center justify-center gap-1 text-[#FFFFFF] py-3 rounded-md font-semibold w-full">
                                        <CiSearch className='text-2xl' />
                                        <span>Search</span>
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* cards  */}
                    <div className=''>
                        {/* card section  */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, index) => (
                                <div key={index}>
                                    <Card card={card}/>
                                </div>
                            ))}
                        </div>
                        {/* Pagination  */}
                        <div className='py-10'>
                            <Pagination />
                        </div>
                    </div>

                </div>



            </div>
            {/* subscribe  */}
            <div>
                <Subscribe />
            </div>

        </div>
    );
};

export default TourLists;