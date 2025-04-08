import Image from 'next/image';
import React from 'react';

const Destinations = () => {
    return (
        <div className='pt-[120px] md:pt-[163px] pb-[120px] min-h-screen bg-[#1A5F7A] text-[#F5F5F5]'>

            <div className='max-w-7xl mx-auto'>
                <div className='pb-[57px] text-center  mx-3 lg:mx-0'>
                    <h4 className='text-4xl md:text-5xl font-bold mb-3'>Popular Destinations</h4>
                    <p className='text-base'>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula <br /> rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                </div>

                {/* image section  */}
                <div className='flex flex-col md:flex-row items-center gap-[35px] min-h-screen  mx-3 lg:mx-0'>
                    {/* left  */}
                    <div className='relative w-full lg:w-[50%] h-[500px]  '>
                        <Image width={8000} height={5000} alt='hello' className='w-full h-full rounded-xl object-cover' src={'/hero-section.jpg'} />
                        <div className='absolute bottom-5 left-5'>
                            <h3 className='text-5xl font-bold'>Europe</h3>
                            <p className='text-base font-normal pt-3'>07 Tours</p>
                        </div>
                    </div>
                    {/* right  */}
                    <div className='w-full lg:w-[50%] flex flex-col gap-[24px] h-[500px]'>
                        <div className='relative '>
                            <Image width={800} height={400} className='h-[308px] rounded-xl' alt='hello' src={'/hero-section.jpg'} />
                            <div className='absolute bottom-5 left-5'>
                                <h3 className='text-4xl font-bold'>Africa Wilds</h3>
                                <p className='text-base font-normal pt-3'>142 Tours</p>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-[24px]'>
                            <div className='relative '>
                                <Image width={800} height={400} alt='hello' className='rounded-xl' src={'/hero-section.jpg'} />
                                <div className='absolute bottom-5 left-5'>
                                    <h3 className='text-2xl font-bold'>Saudi Arabia</h3>
                                    <p className='text-base font-normal pt-3'>15 Tours</p>
                                </div>
                            </div>
                            <div className='relative hidden lg:block'>
                                <Image width={800} height={500} alt='hello' className='rounded-xl' src={'/hero-section.jpg'} />
                                <div className='absolute bottom-5 left-5'>
                                    <h3 className='text-2xl font-bold'>South America</h3>
                                    <p className='text-base font-normal pt-3'>05 Tours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Destinations;