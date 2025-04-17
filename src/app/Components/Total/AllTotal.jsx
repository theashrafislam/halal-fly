import React from 'react';

const AllTotal = () => {
    return (
        <div className='bg-[#C03DB3]'>
            <div>
                {/* content  */}
                <div className='flex flex-col gap-6'>
                    <svg width="86" height="95" viewBox="0 0 86 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.15" d="M36.0487 1.86254C40.3502 -0.620846 45.6498 -0.620847 49.9513 1.86254L79.0487 18.6614C83.3502 21.1448 86 25.7343 86 30.7011V64.2989C86 69.2657 83.3502 73.8552 79.0487 76.3386L49.9513 93.1375C45.6498 95.6208 40.3502 95.6208 36.0487 93.1375L6.9513 76.3386C2.64982 73.8552 0 69.2657 0 64.2989V30.7011C0 25.7343 2.64982 21.1448 6.9513 18.6614L36.0487 1.86254Z" fill="#FD4C5C" />
                    </svg>
                    <div className='text-[#FFF] flex flex-col gap-2'>
                        <h5 className='text-[60px] font-bold'>28K</h5>
                        <p className='text-base font-bold'>Total Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTotal;