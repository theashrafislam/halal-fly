import React from 'react';

const Subscribe = () => {
    return (
        <div className='max-w-7xl mx-auto text-[#F5F5F5] relative '>

            <div className='bg-[#1A5F7A] py-20 rounded-4xl mx-3 lg:mx-0'>
                <h3 className='text-3xl md:text-5xl font-bold text-center'>Subscribe to our newsletter</h3>
                <div className='mt-8 flex flex-col md:flex-row justify-center gap-5 mx-3 lg:mx-0'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-md w-full md:w-80 bg-[#F5F5F5] text-[#2D3E50]"
                    />
                    <button className='btn-primary text-'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;