import React from 'react';
import Card from './Card';

const CardSection = () => {
    return (
        <section className='bg-[#F5F5F5] text-[#2D3E50] py-[100px]'>
            <div className='max-w-7xl mx-auto'>
                <div className='pb-[56px]'>
                    <h4 className='text-5xl font-bold mb-3'>Discover Weekly</h4>
                    <p className='text-base'>An enim nullam tempor sapien gravida donec enim ipsum</p>
                </div>
                {/* cards  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {[1, 2, 3, 4].map((card, index) => (
                        <div key={index}>
                            <Card />
                        </div>
                    ))}
                </div>
                <div className='pt-[60px] flex items-center justify-center'>
                    <button className='px-5 py-2 font-semibold text-base bg-[#F8CB2E] text-[#2D3E50] rounded-md'>View All</button>
                </div>
            </div>
        </section>
    );
};

export default CardSection;