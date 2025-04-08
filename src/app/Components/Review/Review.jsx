import React from 'react';

const Review = () => {
    return (
        <div className='bg-[#F2FBFA] text-[#2D3E50]'>
            <div className='max-w-7xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 py-[120px]'>
                {/* card  */}
                <div className='p-10  bg-white rounded-md'>
                    <h4 className='text-4xl font-bold pb-3'>What our happy clients say</h4>
                    <p className='text-base'>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                    <div className='pt-10'>
                        <h6 className='text-xl font-bold pb-1'>Jenny Wilson</h6>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className='p-10 bg-white rounded-md'>
                    <h4 className='text-4xl font-bold pb-3'>What our happy clients say</h4>
                    <p className='text-base'>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                    <div className='pt-10'>
                        <h6 className='text-xl font-bold pb-1'>Jenny Wilson</h6>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className='p-10 bg-white rounded-md'>
                    <h4 className='text-4xl font-bold pb-3'>What our happy clients say</h4>
                    <p className='text-base'>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                    <div className='pt-10'>
                        <h6 className='text-xl font-bold pb-1'>Jenny Wilson</h6>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;