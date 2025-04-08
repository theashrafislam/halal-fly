import Image from 'next/image';
import React from 'react';
import { CiClock2, CiHeart } from 'react-icons/ci';
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from 'react-icons/io5';

const Card = () => {
    return (
        <div className='rounded-md text-[#2D3E50] bg-white'>
            <div className='relative'>
                <Image src={'/hero-section.jpg'} className='rounded-t-md' alt='Hello' width={700} height={400} />
                <div className='bg-white rounded-full p-2 absolute top-2 right-2'><CiHeart className='text-3xl text-[#2D3E50]' /></div>
                <div className='p-1 absolute -bottom-4 left-3 rounded-md bg-white border border-[#1A5F7A] flex items-center gap-1 w-20'>
                    <CiClock2 className='text-[#1A5F7A]'/>
                    <p className='text-nowrap font-semibold'>3 Days</p>
                </div>
            </div>
            <div className='p-5'>
                <h4 className='text-xl font-bold mb-2'>Venice, Rome and Milan – 9 Days 8 Nights</h4>
                <div className='flex items-center gap-1'>
                    <FaLocationDot className='text-xl' />
                    <p className='text-sm'>Bryce Canyon National Park, USA</p>
                </div>
                <div className='pt-3 pb-8 flex items-center gap-1'>
                    <IoStar className='text-[#FFC83E] text-xl' />
                    <IoStar className='text-[#FFC83E] text-xl' />
                    <IoStar className='text-[#FFC83E] text-xl' />
                    <IoStar className='text-[#FFC83E] text-xl' />
                    <IoStar className='text-[#FFC83E] text-xl' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <p className='text-xl font-bold'>$139.99</p>
                        <del className='text-base text-[#999]'>$190.00</del>
                    </div>
                    <button className='px-5 py-2 font-semibold text-base bg-[#F8CB2E] text-[#2D3E50] rounded-md'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Card;