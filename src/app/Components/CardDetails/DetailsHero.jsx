"use client"

import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { LuEye } from 'react-icons/lu';
import { TiStarFullOutline } from "react-icons/ti";
import ImageCarousel from './ImageCarousel';
import OverView from './OverView';
import FlightIcon from './FlightIcon';
import KeyInfo from './KeyInfo';


const DetailsHero = () => {

    // tabs state 
    const [bookingFourm, setBookingFourm] = useState(true);
    const [enquiryForum, setEnquiryForum] = useState(false);

    return (
        <div className=''>

            <div className='bg-[#F2FBFA]'>
                {/* content  */}
                <div className='max-w-7xl mx-auto pt-[75px] flex items-start justify-between pb-[50px]'>
                    <div>
                        <h1 className='text-[42px] font-bold'>Umrah, Makkah & Medinah – 9 Days 8 Nights</h1>
                        <div className='flex items-center gap-6'>
                            <p className='flex items-center gap-1 text-base'><CiLocationOn className='text-[#00BB98] font-bold' /><span>Bryce Canyon National Park, USA</span></p>
                            <p className='flex items-center gap-1 text-base'><LuEye className='text-[#00BB98] font-bold' /><span>248</span></p>
                            <p className='flex items-center gap-2 text-[#FFC83E] text-2xl'>
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </p>
                        </div>
                    </div>

                    {/* btn  */}
                    <div className='flex items-center gap-2 pt-4'>
                        <button className='text-sm flex items-center gap-1 px-2 py-[5px] bg-[#FFF] border rounded-[5px] border-[#E6E6E6]'><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vuesax/linear/video">
                                <g id="video">
                                    <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M2.29989 2.04019C2.00998 2.33011 1.83301 2.85397 1.83301 3.87997V9.4933C1.83301 10.1228 1.99061 10.6964 2.3304 11.104C2.65681 11.4956 3.20607 11.8 4.13967 11.8H8.35301C9.37519 11.8 9.89963 11.6232 10.1906 11.3327C10.4814 11.0425 10.6597 10.5183 10.6597 9.4933V8.78923L10.6597 8.78664V4.57997L10.6597 4.57739V3.87997C10.6597 2.85397 10.4827 2.33011 10.1928 2.04019C9.90287 1.75027 9.37901 1.5733 8.35301 1.5733H4.13967C3.11368 1.5733 2.58981 1.75027 2.29989 2.04019ZM10.8971 12.0405C11.4382 11.5004 11.6295 10.712 11.6563 9.74573L12.7247 10.4951L12.7253 10.4956C13.2517 10.867 13.8729 11.0369 14.4102 10.7579C14.9473 10.4788 15.1663 9.87249 15.1663 9.22664V4.14664C15.1663 3.50033 14.9471 2.89501 14.4111 2.6151C13.875 2.33514 13.2539 2.50178 12.7267 2.87008L11.6561 3.621C11.6289 2.65854 11.439 1.87224 10.8999 1.33308C10.3131 0.746333 9.43368 0.573303 8.35301 0.573303H4.13967C3.05901 0.573303 2.17954 0.746333 1.59279 1.33308C1.00604 1.91983 0.833008 2.7993 0.833008 3.87997V9.4933C0.833008 10.2705 1.0254 11.1002 1.56228 11.7443C2.11254 12.4044 2.96661 12.8 4.13967 12.8H8.35301C9.43083 12.8 10.3097 12.6268 10.8971 12.0405ZM13.3001 9.6773L11.6597 8.52662V4.83999L13.2993 3.68987C13.6785 3.42513 13.8843 3.46815 13.9482 3.50151C14.0122 3.53494 14.1663 3.67962 14.1663 4.14664V9.22664C14.1663 9.69412 14.012 9.83779 13.9492 9.87043C13.8866 9.90292 13.6814 9.94646 13.3013 9.67816L13.3001 9.6773ZM7.16634 5.01996C7.16634 4.74382 7.3902 4.51996 7.66634 4.51996C7.94248 4.51996 8.16634 4.74382 8.16634 5.01996C8.16634 5.2961 7.94248 5.51996 7.66634 5.51996C7.3902 5.51996 7.16634 5.2961 7.16634 5.01996ZM7.66634 3.51996C6.83791 3.51996 6.16634 4.19153 6.16634 5.01996C6.16634 5.84839 6.83791 6.51996 7.66634 6.51996C8.49477 6.51996 9.16634 5.84839 9.16634 5.01996C9.16634 4.19153 8.49477 3.51996 7.66634 3.51996Z" fill="#B82525" />
                                </g>
                            </g>
                        </svg>
                            <span>View video</span></button>
                        <button className='text-sm flex items-center gap-1 px-2 py-[5px] bg-[#FFF] border rounded-[5px] border-[#E6E6E6]'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99967 15.8533H5.99967C2.37967 15.8533 0.833008 14.3067 0.833008 10.6867V6.68666C0.833008 3.06666 2.37967 1.51999 5.99967 1.51999H9.99967C13.6197 1.51999 15.1663 3.06666 15.1663 6.68666V10.6867C15.1663 14.3067 13.6197 15.8533 9.99967 15.8533ZM5.99967 2.51999C2.92634 2.51999 1.83301 3.61332 1.83301 6.68666V10.6867C1.83301 13.76 2.92634 14.8533 5.99967 14.8533H9.99967C13.073 14.8533 14.1663 13.76 14.1663 10.6867V6.68666C14.1663 3.61332 13.073 2.51999 9.99967 2.51999H5.99967Z" fill="#B82525" />
                            <path d="M6.00033 7.85331C4.98699 7.85331 4.16699 7.03331 4.16699 6.01998C4.16699 5.00665 4.98699 4.18665 6.00033 4.18665C7.01366 4.18665 7.83366 5.00665 7.83366 6.01998C7.83366 7.03331 7.01366 7.85331 6.00033 7.85331ZM6.00033 5.18665C5.54033 5.18665 5.16699 5.55998 5.16699 6.01998C5.16699 6.47998 5.54033 6.85331 6.00033 6.85331C6.46033 6.85331 6.83366 6.47998 6.83366 6.01998C6.83366 5.55998 6.46033 5.18665 6.00033 5.18665Z" fill="#B82525" />
                            <path d="M1.78017 13.82C1.62017 13.82 1.46017 13.74 1.36684 13.6C1.21351 13.3733 1.27351 13.06 1.50684 12.9066L4.79351 10.7C5.51351 10.2133 6.50684 10.2733 7.16017 10.8266L7.38017 11.02C7.71351 11.3066 8.28017 11.3066 8.60684 11.02L11.3802 8.63997C12.0868 8.0333 13.2002 8.0333 13.9135 8.63997L15.0002 9.5733C15.2068 9.7533 15.2335 10.0666 15.0535 10.28C14.8735 10.4866 14.5602 10.5133 14.3468 10.3333L13.2602 9.39997C12.9268 9.1133 12.3602 9.1133 12.0268 9.39997L9.25351 11.78C8.54684 12.3866 7.43351 12.3866 6.72017 11.78L6.50017 11.5866C6.19351 11.3266 5.68684 11.3 5.34684 11.5333L2.06017 13.74C1.97351 13.7933 1.87351 13.82 1.78017 13.82Z" fill="#B82525" />
                        </svg>
                            <span>10 photos</span></button>
                    </div>
                </div>

                {/* sliders  */}
                <div className='pb-10'>
                    <ImageCarousel />
                </div>

                {/* key info and booking  */}
                <div className='max-w-7xl mx-auto flex justify-between pb-16 relative'>

                    {/* key info */}
                    <KeyInfo />

                    {/* Booking  */}
                    <div className='w-1/3 bg-white p-7 rounded-xl absolute top-0 right-0 shadow-xl'>
                        <p className='flex items-center gap-2 pb-2'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_104_6317)">
                                    <path d="M12.0701 22.4142C10.6601 22.4142 9.24009 21.8742 8.17009 20.8042L3.64009 16.2742C2.54009 15.1742 1.96009 13.6542 2.03009 12.1042L2.27009 7.1042C2.38009 4.7142 4.27009 2.8242 6.67009 2.7042L11.6701 2.4642C13.2201 2.4042 14.7401 2.9742 15.8401 4.0742L20.3701 8.6042C22.5201 10.7542 22.5201 14.2642 20.3701 16.4142L15.9801 20.8042C14.9001 21.8742 13.4901 22.4142 12.0701 22.4142ZM4.70009 15.2042L9.23009 19.7342C9.99009 20.4942 11.0001 20.9142 12.0701 20.9142C13.1401 20.9142 14.1501 20.4942 14.9101 19.7342L19.3001 15.3442C20.0601 14.5842 20.4801 13.5742 20.4801 12.5042C20.4801 11.4342 20.0601 10.4242 19.3001 9.6642L14.7701 5.1342C13.9701 4.3342 12.8601 3.9042 11.7401 3.9642L6.74009 4.2042C5.11009 4.2742 3.84009 5.5442 3.76009 7.1642L3.52009 12.1642C3.47009 13.2942 3.90009 14.4042 4.70009 15.2042Z" fill="#B82525" />
                                    <path d="M9.5 13.1842C7.71 13.1842 6.25 11.7242 6.25 9.9342C6.25 8.1442 7.71 6.6842 9.5 6.6842C11.29 6.6842 12.75 8.1442 12.75 9.9342C12.75 11.7242 11.29 13.1842 9.5 13.1842ZM9.5 8.1842C8.54 8.1842 7.75 8.9742 7.75 9.9342C7.75 10.8942 8.54 11.6842 9.5 11.6842C10.46 11.6842 11.25 10.8942 11.25 9.9342C11.25 8.9742 10.46 8.1842 9.5 8.1842Z" fill="#B82525" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_6317">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.434204)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='text-base font-bold text-[#444]'>From</span>
                        </p>

                        <p className='flex items-center gap-3'><span className='text-[32px] font-bold text-[#00BB98]'>$42.00</span><span className='text-[#999]'>$42.00</span></p>

                        {/* svg  */}
                        <FlightIcon />

                        {/* tabs  */}
                        <div className='flex items-center justify-between border-b-2 border-[#E6E6E6]'>
                            <button onClick={() => {
                                setEnquiryForum(false);
                                setBookingFourm(true);
                            }} className={`py-4 px-7 cursor-pointer ${bookingFourm ? 'border-b-2 border-[#00BB98] text-[#00BB98] font-semibold' : ''}`}>Booking Forum</button>
                            <button onClick={() => {
                                setBookingFourm(false);
                                setEnquiryForum(true);
                            }} className={`py-4 px-7 cursor-pointer ${enquiryForum ? 'border-b-2 border-[#00BB98] text-[#00BB98] font-semibold' : ''}`}>Enquiry Forum</button>
                        </div>

                        {/* conditional */}
                        {
                            bookingFourm &&
                            <div className='pt-8 flex flex-col gap-6'>
                                {/* Date check in */}
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="date-in" className='text-base'>Date check in</label>
                                    <input type="date" name="" id="date-in" className='py-3 px-4 border-[#E6E6E6] border hover:bg-[#F5F5F5] rounded-lg font-medium' />
                                </div>

                                {/* Date check out */}
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="date-out" className='text-base'>Date check out</label>
                                    <input type="date" name="" id="date-out" className='py-3 px-4 border-[#E6E6E6] border hover:bg-[#F5F5F5] rounded-lg font-medium' />
                                </div>

                                {/* Total Night: */}
                                <div className='flex flex-col items-start gap-6'>
                                    <p className='text-base font-semibold'>Total Night:</p>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[60px] py-4 rounded-lg text-center text-2xl font-bold bg-[#F4F4F4]'>1</div>
                                        <p className='text-base text-[#444]'>Number ticket  × $42.00</p>
                                    </div>
                                    <p className='text-base font-semibold'>Total = $42.00</p>
                                </div>

                                {/* btn  */}
                                <button className='btn-primary !py-5'>Book Now</button>

                            </div>
                        }
                        {
                            enquiryForum &&
                            <div>
                                <h1 className='text-2xl font-bold text-center pt-8'>Coming Soon..</h1>
                            </div>
                        }

                    </div>

                </div>
            </div>

            {/* Itinerary Overview */}
            <div className='max-w-7xl mx-auto py-[70px] '>

                <div className='w-2/3 pr-10'>
                    {/* Overview */}
                    <OverView />

                </div>
            </div>

        </div>
    );
};

export default DetailsHero;