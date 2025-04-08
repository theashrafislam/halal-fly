import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='bg-[#F5F5F5] text-[#2D3E50] py-[120px]'>
            <div className='max-w-7xl mx-auto'>
                <div className='pb-[56px] text-center'>
                    <h4 className='text-5xl font-bold mb-3'>Travel Tips and Advice</h4>
                    <p className='text-base'>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula <br /> rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                </div>

                {/* cards  */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='rounded-md text-[#2D3E50] bg-white w-[416px]'>
                        <div>
                            <Image src={'/hero-section.jpg'} className='rounded-t-md' alt='Hello' width={700} height={400} />
                        </div>
                        <div className='p-5'>
                            <div className='pb-3 flex items-center gap-3'>
                                <div className='flex items-center gap-1' >
                                    <FaRegUserCircle className='text-xl' />
                                    <span>Admit</span>
                                </div>
                                <div className='flex items-center gap-1' >
                                    <CiCalendarDate className='text-xl' />
                                    <span>25 May, 2021</span>
                                </div>
                            </div>
                            <h4 className='text-xl font-bold mb-[22px]'>How to travel with paper map</h4>
                            <p>It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...</p>
                            <p className='pt-4 font-semibold text-base cursor-pointer'>Read More</p>
                        </div>
                    </div>
                    <div className='rounded-md text-[#2D3E50] bg-white w-[416px]'>
                        <div>
                            <Image src={'/hero-section.jpg'} className='rounded-t-md' alt='Hello' width={700} height={400} />
                        </div>
                        <div className='p-5'>
                            <div className='pb-3 flex items-center gap-3'>
                                <div className='flex items-center gap-1' >
                                    <FaRegUserCircle className='text-xl' />
                                    <span>Admit</span>
                                </div>
                                <div className='flex items-center gap-1' >
                                    <CiCalendarDate className='text-xl' />
                                    <span>25 May, 2021</span>
                                </div>
                            </div>
                            <h4 className='text-xl font-bold mb-[22px]'>How to travel with paper map</h4>
                            <p>It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...</p>
                            <p className='pt-4 font-semibold text-base cursor-pointer'>Read More</p>
                        </div>
                    </div>
                    <div className='rounded-md text-[#2D3E50] bg-white w-[416px]'>
                        <div>
                            <Image src={'/hero-section.jpg'} className='rounded-t-md' alt='Hello' width={700} height={400} />
                        </div>
                        <div className='p-5'>
                            <div className='pb-3 flex items-center gap-3'>
                                <div className='flex items-center gap-1' >
                                    <FaRegUserCircle className='text-xl' />
                                    <span>Admit</span>
                                </div>
                                <div className='flex items-center gap-1' >
                                    <CiCalendarDate className='text-xl' />
                                    <span>25 May, 2021</span>
                                </div>
                            </div>
                            <h4 className='text-xl font-bold mb-[22px]'>How to travel with paper map</h4>
                            <p>It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...</p>
                            <p className='pt-4 font-semibold text-base cursor-pointer'>Read More</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;