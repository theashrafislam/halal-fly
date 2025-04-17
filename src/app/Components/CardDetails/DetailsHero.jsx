"use client"

import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { LuEye } from 'react-icons/lu';
import { TiStarFullOutline } from "react-icons/ti";
import ImageCarousel from './ImageCarousel';


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
                    <div className='w-2/3 flex items-center gap-20 pt-7'>
                        {/* Duration */}
                        <div className='flex items-center gap-5'>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.667 8.57324C10.1203 8.57324 9.66699 8.11991 9.66699 7.57324V3.57324C9.66699 3.02658 10.1203 2.57324 10.667 2.57324C11.2137 2.57324 11.667 3.02658 11.667 3.57324V7.57324C11.667 8.11991 11.2137 8.57324 10.667 8.57324Z" fill="#B82525" />
                                <path d="M21.333 8.57324C20.7863 8.57324 20.333 8.11991 20.333 7.57324V3.57324C20.333 3.02658 20.7863 2.57324 21.333 2.57324C21.8797 2.57324 22.333 3.02658 22.333 3.57324V7.57324C22.333 8.11991 21.8797 8.57324 21.333 8.57324Z" fill="#B82525" />
                                <path d="M11.3333 20.2399C11.16 20.2399 10.9867 20.1999 10.8267 20.1332C10.6533 20.0666 10.52 19.9732 10.3867 19.8532C10.1467 19.5999 10 19.2666 10 18.9066C10 18.7332 10.04 18.5599 10.1067 18.3999C10.1733 18.2399 10.2667 18.0932 10.3867 17.9599C10.52 17.8399 10.6533 17.7465 10.8267 17.6799C11.3067 17.4799 11.9067 17.5866 12.28 17.9599C12.52 18.2132 12.6667 18.5599 12.6667 18.9066C12.6667 18.9866 12.6533 19.0799 12.64 19.1732C12.6267 19.2532 12.6 19.3332 12.56 19.4132C12.5333 19.4932 12.4933 19.5732 12.44 19.6532C12.4 19.7199 12.3333 19.7866 12.28 19.8532C12.0267 20.0932 11.68 20.2399 11.3333 20.2399Z" fill="#B82525" />
                                <path d="M16.0003 20.2399C15.827 20.2399 15.6537 20.1999 15.4937 20.1333C15.3203 20.0666 15.187 19.9732 15.0537 19.8532C14.8137 19.5999 14.667 19.2666 14.667 18.9066C14.667 18.7332 14.707 18.5599 14.7737 18.3999C14.8403 18.2399 14.9337 18.0932 15.0537 17.9599C15.187 17.8399 15.3203 17.7466 15.4937 17.6799C15.9737 17.4666 16.5737 17.5866 16.947 17.9599C17.187 18.2132 17.3337 18.5599 17.3337 18.9066C17.3337 18.9866 17.3203 19.0799 17.307 19.1733C17.2937 19.2533 17.267 19.3332 17.227 19.4132C17.2003 19.4932 17.1603 19.5732 17.107 19.6532C17.067 19.7199 17.0003 19.7866 16.947 19.8532C16.6937 20.0932 16.347 20.2399 16.0003 20.2399Z" fill="#B82525" />
                                <path d="M20.6663 20.2399C20.493 20.2399 20.3197 20.1999 20.1597 20.1333C19.9863 20.0666 19.853 19.9732 19.7197 19.8532C19.6663 19.7866 19.613 19.7199 19.5597 19.6532C19.5063 19.5732 19.4663 19.4932 19.4397 19.4132C19.3997 19.3332 19.373 19.2533 19.3597 19.1733C19.3463 19.0799 19.333 18.9866 19.333 18.9066C19.333 18.5599 19.4797 18.2132 19.7197 17.9599C19.853 17.8399 19.9863 17.7466 20.1597 17.6799C20.653 17.4666 21.2397 17.5866 21.613 17.9599C21.853 18.2132 21.9997 18.5599 21.9997 18.9066C21.9997 18.9866 21.9863 19.0799 21.973 19.1733C21.9597 19.2533 21.933 19.3332 21.893 19.4132C21.8663 19.4932 21.8263 19.5732 21.773 19.6532C21.733 19.7199 21.6663 19.7866 21.613 19.8532C21.3597 20.0932 21.013 20.2399 20.6663 20.2399Z" fill="#B82525" />
                                <path d="M11.3333 24.9066C11.16 24.9066 10.9867 24.8666 10.8267 24.7999C10.6667 24.7333 10.52 24.6399 10.3867 24.5199C10.1467 24.2666 10 23.9199 10 23.5732C10 23.3999 10.04 23.2266 10.1067 23.0666C10.1733 22.8932 10.2667 22.7466 10.3867 22.6266C10.88 22.1333 11.7867 22.1333 12.28 22.6266C12.52 22.8799 12.6667 23.2266 12.6667 23.5732C12.6667 23.9199 12.52 24.2666 12.28 24.5199C12.0267 24.7599 11.68 24.9066 11.3333 24.9066Z" fill="#B82525" />
                                <path d="M16.0003 24.9066C15.6537 24.9066 15.307 24.7599 15.0537 24.5199C14.8137 24.2666 14.667 23.9199 14.667 23.5732C14.667 23.3999 14.707 23.2266 14.7737 23.0666C14.8403 22.8932 14.9337 22.7466 15.0537 22.6266C15.547 22.1333 16.4537 22.1333 16.947 22.6266C17.067 22.7466 17.1603 22.8932 17.227 23.0666C17.2937 23.2266 17.3337 23.3999 17.3337 23.5732C17.3337 23.9199 17.187 24.2666 16.947 24.5199C16.6937 24.7599 16.347 24.9066 16.0003 24.9066Z" fill="#B82525" />
                                <path d="M20.6663 24.9066C20.3197 24.9066 19.973 24.7599 19.7197 24.5199C19.5997 24.3999 19.5063 24.2533 19.4397 24.08C19.373 23.92 19.333 23.7466 19.333 23.5733C19.333 23.4 19.373 23.2266 19.4397 23.0666C19.5063 22.8933 19.5997 22.7466 19.7197 22.6266C20.0263 22.32 20.493 22.1733 20.9197 22.2666C21.013 22.2799 21.093 22.3066 21.173 22.3466C21.253 22.3733 21.333 22.4133 21.413 22.4666C21.4797 22.5066 21.5463 22.5733 21.613 22.6266C21.853 22.88 21.9997 23.2266 21.9997 23.5733C21.9997 23.92 21.853 24.2666 21.613 24.5199C21.3597 24.7599 21.013 24.9066 20.6663 24.9066Z" fill="#B82525" />
                                <path d="M27.3337 14.0265H4.66699C4.12033 14.0265 3.66699 13.5732 3.66699 13.0265C3.66699 12.4798 4.12033 12.0265 4.66699 12.0265H27.3337C27.8803 12.0265 28.3337 12.4798 28.3337 13.0265C28.3337 13.5732 27.8803 14.0265 27.3337 14.0265Z" fill="#B82525" />
                                <path d="M21.3333 31.2399H10.6667C5.8 31.2399 3 28.4399 3 23.5732V12.2399C3 7.37324 5.8 4.57324 10.6667 4.57324H21.3333C26.2 4.57324 29 7.37324 29 12.2399V23.5732C29 28.4399 26.2 31.2399 21.3333 31.2399ZM10.6667 6.57324C6.85333 6.57324 5 8.42658 5 12.2399V23.5732C5 27.3866 6.85333 29.2399 10.6667 29.2399H21.3333C25.1467 29.2399 27 27.3866 27 23.5732V12.2399C27 8.42658 25.1467 6.57324 21.3333 6.57324H10.6667Z" fill="#B82525" />
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base font-bold'>Duration</p>
                                <p className='text-sm text-[#444] font-bold'>9 days</p>
                            </div>
                        </div>
                        {/* Max People */}
                        <div className='flex items-center gap-5'>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0001 11.4532C23.9601 11.4532 23.9334 11.4532 23.8934 11.4532H23.8268C21.3068 11.3732 19.4268 9.42655 19.4268 7.02655C19.4268 4.57322 21.4268 2.58655 23.8668 2.58655C26.3068 2.58655 28.3068 4.58655 28.3068 7.02655C28.2934 9.43988 26.4134 11.3866 24.0134 11.4666C24.0134 11.4532 24.0134 11.4532 24.0001 11.4532ZM23.8668 4.57322C22.5201 4.57322 21.4268 5.66656 21.4268 7.01322C21.4268 8.33322 22.4534 9.39989 23.7734 9.45323C23.7868 9.43989 23.8934 9.43989 24.0134 9.45323C25.3068 9.38656 26.3068 8.31989 26.3201 7.01322C26.3201 5.66656 25.2268 4.57322 23.8668 4.57322Z" fill="#B82525" />
                                <path d="M24.013 21.2799C23.493 21.2799 22.973 21.2399 22.453 21.1466C21.9063 21.0533 21.5463 20.5333 21.6397 19.9866C21.733 19.4399 22.253 19.0799 22.7997 19.1733C24.4397 19.4533 26.173 19.1466 27.333 18.3733C27.9597 17.96 28.293 17.4399 28.293 16.9199C28.293 16.3999 27.9463 15.8933 27.333 15.4799C26.173 14.7066 24.413 14.3999 22.7597 14.6933C22.213 14.7999 21.693 14.4266 21.5997 13.8799C21.5063 13.3333 21.8663 12.8133 22.413 12.7199C24.5863 12.3333 26.8397 12.7466 28.4397 13.8133C29.613 14.5999 30.293 15.7199 30.293 16.9199C30.293 18.1066 29.6263 19.24 28.4397 20.04C27.2263 20.84 25.653 21.2799 24.013 21.2799Z" fill="#B82525" />
                                <path d="M7.95965 11.4532C7.94632 11.4532 7.93298 11.4532 7.93298 11.4532C5.53298 11.3732 3.65298 9.42657 3.63965 7.02657C3.63965 4.57324 5.63965 2.57324 8.07965 2.57324C10.5197 2.57324 12.5196 4.57324 12.5196 7.01324C12.5196 9.42658 10.6396 11.3732 8.23965 11.4532L7.95965 10.4532L8.05298 11.4532C8.02632 11.4532 7.98632 11.4532 7.95965 11.4532ZM8.09298 9.45325C8.17298 9.45325 8.23965 9.45324 8.31965 9.46657C9.50632 9.41324 10.5463 8.34657 10.5463 7.02657C10.5463 5.6799 9.45298 4.58657 8.10632 4.58657C6.75965 4.58657 5.66632 5.6799 5.66632 7.02657C5.66632 8.33324 6.67965 9.38657 7.97298 9.46657C7.98632 9.45324 8.03965 9.45325 8.09298 9.45325Z" fill="#B82525" />
                                <path d="M7.94699 21.2799C6.30699 21.2799 4.73366 20.84 3.52032 20.04C2.34699 19.2533 1.66699 18.1199 1.66699 16.9199C1.66699 15.7333 2.34699 14.5999 3.52032 13.8133C5.12032 12.7466 7.37366 12.3333 9.54699 12.7199C10.0937 12.8133 10.4537 13.3333 10.3603 13.8799C10.267 14.4266 9.74699 14.7999 9.20033 14.6933C7.54699 14.3999 5.80033 14.7066 4.62699 15.4799C4.00033 15.8933 3.66699 16.3999 3.66699 16.9199C3.66699 17.4399 4.01366 17.96 4.62699 18.3733C5.78699 19.1466 7.52032 19.4533 9.16032 19.1733C9.70699 19.0799 10.227 19.4533 10.3203 19.9866C10.4137 20.5333 10.0537 21.0533 9.50699 21.1466C8.98699 21.2399 8.46699 21.2799 7.94699 21.2799Z" fill="#B82525" />
                                <path d="M16.0001 21.4132C15.9601 21.4132 15.9334 21.4132 15.8934 21.4132H15.8268C13.3068 21.3332 11.4268 19.3865 11.4268 16.9865C11.4268 14.5332 13.4268 12.5465 15.8668 12.5465C18.3068 12.5465 20.3068 14.5465 20.3068 16.9865C20.2934 19.3998 18.4134 21.3465 16.0134 21.4265C16.0134 21.4132 16.0134 21.4132 16.0001 21.4132ZM15.8668 14.5332C14.5201 14.5332 13.4268 15.6265 13.4268 16.9732C13.4268 18.2932 14.4534 19.3599 15.7734 19.4132C15.7868 19.3999 15.8934 19.3999 16.0134 19.4132C17.3068 19.3465 18.3068 18.2799 18.3201 16.9732C18.3201 15.6399 17.2268 14.5332 15.8668 14.5332Z" fill="#B82525" />
                                <path d="M15.9994 31.2532C14.3994 31.2532 12.7994 30.8399 11.5594 29.9999C10.3861 29.2132 9.70605 28.0932 9.70605 26.8932C9.70605 25.7066 10.3727 24.5599 11.5594 23.7732C14.0527 22.1199 17.9594 22.1199 20.4394 23.7732C21.6127 24.5599 22.2927 25.6799 22.2927 26.8799C22.2927 28.0665 21.6261 29.2132 20.4394 29.9999C19.1994 30.8266 17.5994 31.2532 15.9994 31.2532ZM12.6661 25.4532C12.0394 25.8665 11.7061 26.3865 11.7061 26.9065C11.7061 27.4265 12.0527 27.9332 12.6661 28.3465C14.4661 29.5599 17.5194 29.5599 19.3194 28.3465C19.9461 27.9332 20.2794 27.4132 20.2794 26.8932C20.2794 26.3732 19.9327 25.8665 19.3194 25.4532C17.5327 24.2399 14.4794 24.2532 12.6661 25.4532Z" fill="#B82525" />
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base font-bold'>Max People</p>
                                <p className='text-sm text-[#444] font-bold'>40</p>
                            </div>
                        </div>
                        {/* Min Age */}
                        <div className='flex items-center gap-5'>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1596 18.9465C16.133 18.9465 16.093 18.9465 16.0663 18.9465C16.0263 18.9465 15.973 18.9465 15.933 18.9465C12.9063 18.8532 10.6396 16.4932 10.6396 13.5865C10.6396 10.6265 13.053 8.2132 16.013 8.2132C18.973 8.2132 21.3863 10.6265 21.3863 13.5865C21.373 16.5065 19.093 18.8532 16.1996 18.9465C16.173 18.9465 16.173 18.9465 16.1596 18.9465ZM15.9996 10.1999C14.133 10.1999 12.6263 11.7199 12.6263 13.5732C12.6263 15.3999 14.053 16.8799 15.8663 16.9465C15.9063 16.9332 16.0396 16.9332 16.173 16.9465C17.9596 16.8532 19.3596 15.3865 19.373 13.5732C19.373 11.7199 17.8663 10.1999 15.9996 10.1999Z" fill="#B82525" />
                                <path d="M16.0004 31.2399C12.4138 31.2399 8.9871 29.9065 6.33377 27.4799C6.09377 27.2665 5.9871 26.9465 6.01377 26.6399C6.1871 25.0532 7.17377 23.5732 8.81377 22.4799C12.7871 19.8399 19.2271 19.8399 23.1871 22.4799C24.8271 23.5865 25.8138 25.0532 25.9871 26.6399C26.0271 26.9599 25.9071 27.2665 25.6671 27.4799C23.0138 29.9065 19.5871 31.2399 16.0004 31.2399ZM8.1071 26.3732C10.3204 28.2265 13.1071 29.2399 16.0004 29.2399C18.8938 29.2399 21.6804 28.2265 23.8938 26.3732C23.6538 25.5599 23.0138 24.7732 22.0671 24.1332C18.7871 21.9465 13.2271 21.9465 9.92043 24.1332C8.97377 24.7732 8.3471 25.5599 8.1071 26.3732Z" fill="#B82525" />
                                <path d="M16.0003 31.2399C8.09366 31.2399 1.66699 24.8132 1.66699 16.9066C1.66699 8.99991 8.09366 2.57324 16.0003 2.57324C23.907 2.57324 30.3337 8.99991 30.3337 16.9066C30.3337 24.8132 23.907 31.2399 16.0003 31.2399ZM16.0003 4.57324C9.20033 4.57324 3.66699 10.1066 3.66699 16.9066C3.66699 23.7066 9.20033 29.2399 16.0003 29.2399C22.8003 29.2399 28.3337 23.7066 28.3337 16.9066C28.3337 10.1066 22.8003 4.57324 16.0003 4.57324Z" fill="#B82525" />
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base font-bold'>Min Age</p>
                                <p className='text-sm text-[#444] font-bold'>12+</p>
                            </div>
                        </div>
                        {/* Pickup */}
                        <div className='flex items-center gap-5'>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_6306)">
                                    <path d="M15.9998 19.7999C13.1598 19.7999 10.8398 17.4932 10.8398 14.6399C10.8398 11.7866 13.1598 9.49323 15.9998 9.49323C18.8398 9.49323 21.1598 11.7999 21.1598 14.6532C21.1598 17.5066 18.8398 19.7999 15.9998 19.7999ZM15.9998 11.4932C14.2665 11.4932 12.8398 12.9066 12.8398 14.6532C12.8398 16.3999 14.2532 17.8132 15.9998 17.8132C17.7465 17.8132 19.1598 16.3999 19.1598 14.6532C19.1598 12.9066 17.7332 11.4932 15.9998 11.4932Z" fill="#B82525" />
                                    <path d="M16.0002 31.2532C14.0269 31.2532 12.0402 30.5066 10.4936 29.0266C6.56023 25.2399 2.21357 19.1999 3.85357 12.0132C5.33357 5.49324 11.0269 2.57324 16.0002 2.57324C16.0002 2.57324 16.0002 2.57324 16.0136 2.57324C20.9869 2.57324 26.6802 5.49324 28.1602 12.0266C29.7869 19.2132 25.4402 25.2399 21.5069 29.0266C19.9602 30.5066 17.9736 31.2532 16.0002 31.2532ZM16.0002 4.57324C12.1202 4.57324 7.13357 6.63991 5.81357 12.4532C4.37357 18.7332 8.32023 24.1466 11.8936 27.5732C14.2002 29.7999 17.8136 29.7999 20.1202 27.5732C23.6802 24.1466 27.6269 18.7332 26.2136 12.4532C24.8802 6.63991 19.8802 4.57324 16.0002 4.57324Z" fill="#B82525" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_6306">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.906555)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base font-bold'>Pickup</p>
                                <p className='text-sm text-[#444] font-bold'>Airpot</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking  */}
                    <div className='w-1/3 bg-white p-7 rounded-xl absolute top-0 right-0 shadow-xl'>
                        <p className='flex items-center gap-2 pb-2'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_6317)">
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
                        <div className='py-7'>
                            <svg width="356" height="33" viewBox="0 0 356 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M177.031 31.5769L177.811 29.6094C177.913 29.6486 178.023 29.6651 178.137 29.6469C178.525 29.5855 178.796 29.1816 178.741 28.7454C178.709 28.4888 178.57 28.2806 178.383 28.1629L179.174 26.1664C179.275 26.204 179.384 26.2199 179.496 26.2022C179.884 26.1408 180.155 25.737 180.1 25.3007C180.068 25.0459 179.931 24.8394 179.747 24.7211L182.142 18.6736L187.721 18.7123C190.494 18.4984 190.905 16.9467 190.964 16.4217H191C191 16.4217 191.079 14.2142 187.732 13.9816L182.154 14.0623L179.722 8.03134C179.925 7.91075 180.073 7.68153 180.098 7.40509C180.137 6.96654 179.852 6.57521 179.462 6.53141C179.348 6.51833 179.239 6.53994 179.138 6.58374L178.331 4.58441C178.487 4.45529 178.596 4.25791 178.617 4.0247C178.656 3.58616 178.371 3.19482 177.981 3.15103C177.905 3.14249 177.831 3.15103 177.761 3.16866L176.966 1.19833C176.966 1.19833 176.423 -0.604765 175.714 0.603368L177.446 14.1135L168.371 15.4929L166.519 10.4362C166.519 10.4362 165.713 9.83899 166.078 11.6427L166.497 15.5031C166.497 15.5031 164.934 15.2608 165.028 16.3643H165.323L165.326 16.4985L165.004 16.5019C164.916 17.606 166.477 17.3517 166.477 17.3517L166.082 21.2156C165.728 23.0221 166.531 22.4186 166.531 22.4186L168.352 17.3483L177.435 18.6588L175.784 32.1821C176.5 33.3845 177.033 31.5774 177.033 31.5774L177.031 31.5769ZM176.151 16.3927L176.297 16.3893H176.452L176.151 16.3927Z" fill="#B82525" />
                                <path d="M2.99926 19.5188C4.65612 19.5188 5.99943 17.9431 5.99963 15.9992C5.99984 14.0554 4.65685 12.4796 3 12.4796C1.34315 12.4796 -0.00016474 14.0554 -0.000367956 15.9992C-0.000571172 17.9431 1.34241 19.5188 2.99926 19.5188Z" fill="#B82525" />
                                <path d="M353 19.5188C354.657 19.5188 356 17.9431 356.001 15.9992C356.001 14.0554 354.658 12.4796 353.001 12.4796C351.344 12.4796 350.001 14.0554 350.001 15.9992C350 17.9431 351.343 19.5188 353 19.5188Z" fill="#B82525" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5244 15.8322H14V16.9497H17.5244V15.8322ZM333.791 16.9497H326.762V15.8322H333.791V16.9497ZM322.077 16.9497H315.049V15.8322H322.077V16.9497ZM310.364 16.9497H303.335V15.8322H310.364V16.9497ZM298.65 16.9497H291.621V15.8322H298.65V16.9497ZM286.936 16.9497H279.907V15.8322H286.936V16.9497ZM275.222 16.9497H268.195V15.8322H275.222V16.9497ZM263.509 16.9497H256.48V15.8322H263.509V16.9497ZM251.795 16.9497H244.767V15.8322H251.795V16.9497ZM240.081 16.9497H233.053V15.8322H240.081V16.9497ZM228.367 16.9497H221.34V15.8322H228.367V16.9497ZM216.653 16.9497H209.626V15.8322H216.653V16.9497ZM204.94 16.9497H197.912V15.8322H204.94V16.9497ZM193.226 16.9497H186.198V15.8322H193.226V16.9497ZM181.512 16.9497H174.485V15.8322H181.512V16.9497ZM169.798 16.9497H162.771V15.8322H169.798V16.9497ZM158.085 16.9497H151.057V15.8322H158.085V16.9497ZM146.371 16.9497H139.343V15.8322H146.371V16.9497ZM134.657 16.9497H127.628V15.8322H134.657V16.9497ZM122.943 16.9497H115.914V15.8322H122.943V16.9497ZM111.229 16.9497H104.201V15.8322H111.229V16.9497ZM99.5157 16.9497H92.4881V15.8322H99.5157V16.9497ZM87.8019 16.9497H80.7743V15.8322H87.8019V16.9497ZM76.0881 16.9497H69.0606V15.8322H76.0881V16.9497ZM64.3743 16.9497H57.3468V15.8322H64.3743V16.9497ZM52.6606 16.9497H45.633V15.8322H52.6606V16.9497ZM40.9468 16.9497H33.9192V15.8322H40.9468V16.9497ZM29.233 16.9497H22.2055V15.8322H29.233V16.9497ZM338.476 15.8322H342V16.9497H338.476V15.8322Z" fill="#B82525" />
                            </svg>
                        </div>

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
                    <div className='flex flex-col gap-5 '>
                        <h6 className='text-[42px] font-bold'>Overview</h6>
                        <p className='text-[#444]'>An Umrah tour covering both Makkah and Madinah offers a deeply spiritual journey for Muslims. The pilgrimage begins in Makkah, where pilgrims perform the Umrah rituals—Tawaf around the Kaaba, Sa’i between Safa and Marwah, and trimming or shaving the hair. Alongside the rituals, pilgrims visit sacred sites like Jabal al-Noor, the Zamzam Well, and Maqam Ibrahim. Accommodation is typically close to Masjid al-Haram, and tours are guided by scholars or experienced coordinators.
                            <br />
                            After completing Umrah, the journey continues to Madinah, where pilgrims spend time at Masjid al-Nabawi, the resting place of Prophet Muhammad ﷺ. Visitors often pray in Rawdah, explore historical sites such as Quba Mosque, Uhud Mountain, and the Qiblatain Mosque. The tour includes hotel stays, transport between cities, and often meals and group lectures, making it a well-rounded spiritual and educational experience.
                        </p>
                    </div>

                    {/* Makkah Highlights */}
                    <div className='mt-7 flex flex-col gap-3'>
                        <h6 className='text-2xl font-bold'>Makkah Highlights</h6>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Masjid al-Haram:</span> Prayers in the holiest mosque in Islam.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Kaaba:</span> Heart of the Islamic world, focus of every Muslim's prayer.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Zamzam Well:</span> Drinking and collecting blessed water.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Noor:</span> Cave of Hira – first revelation site.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Thawr:</span> Site where Prophet Muhammad ﷺ hid during Hijrah.</p>
                        </div>
                    </div>


                    {/* Medinah Highlights */}
                    <div className='mt-7 flex flex-col gap-3'>
                        <h6 className='text-2xl font-bold'>Medinah Highlights</h6>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Masjid al-Nabawi:</span> Praying in the Prophet’s Mosque.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Rawdah:</span> Area between Prophet’s tomb and pulpit, considered part of Paradise.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Zamzam Well:</span> Drinking and collecting blessed water.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Quba Mosque :</span> First mosque built in Islam.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                            <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Thawr:</span> Site of the famous Battle of Uhud.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default DetailsHero;