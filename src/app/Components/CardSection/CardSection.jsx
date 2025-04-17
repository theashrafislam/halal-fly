import React from 'react';
import Card from './Card';

const CardSection = () => {
    return (
        <section className='bg-[#FFF] text-[#2D3E50] py-[100px]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-start justify-between'>
                    <div className='pb-[56px] mx-3 lg:mx-0'>
                        <h4 className='text-5xl font-bold mb-3'>Discover Weekly</h4>
                        <p className='text-base'>An enim nullam tempor sapien gravida donec enim ipsum</p>
                    </div>
                    {/* slider  */}
                    <div className='flex items-center gap-1'>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 35C8.61116 35 1 27.3888 1 18C1 8.61116 8.61116 1 18 1C27.3888 1 35 8.61116 35 18C35 27.3888 27.3888 35 18 35ZM18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36Z" fill="#999999" />
                            <path d="M21 21.4974L17.7719 18L21 14.5026L19.6134 13L15 18L19.6134 23L21 21.4974Z" fill="#999999" />
                        </svg>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#999999" />
                            <path d="M15 21.4974L18.2281 18L15 14.5026L16.3866 13L21 18L16.3866 23L15 21.4974Z" fill="#999999" />
                        </svg>
                    </div>
                </div>
                {/* cards  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-3 lg:mx-0'>
                    {[1, 2, 3, 4].map((card, index) => (
                        <div key={index}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
                <div className='pt-[60px] flex items-center justify-center'>
                    <button className='btn-primary'>View All</button>
                </div>
            </div>
        </section>
    );
};

export default CardSection;