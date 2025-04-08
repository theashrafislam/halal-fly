import React from 'react';

const Header = () => {
    return (
        <nav className='bg-[#F5F5F5]'>
            <div className='max-w-7xl mx-auto text-[#2D3E50] flex items-center justify-between py-4'>
                {/* menu section  */}
                <ul className='flex items-center gap-[46px]'>
                    <li className='font-semibold'>Tours</li>
                    <li className='font-semibold'>Destination</li>
                    <li className='font-semibold'>Blog</li>
                    <li className='font-semibold'>Page</li>
                    <li className='font-semibold'>Contact</li>
                </ul>

                {/* button section  */}
                <div className='flex items-center gap-4'>
                    <button className='bg-white px-8 py-3 font-semibold rounded-lg'>Login</button>
                    <button className='bg-[#F8CB2E] px-8 py-3 font-semibold rounded-lg'>Sign Up</button>
                    <button className='bg-white px-8 py-3 font-semibold rounded-lg'>B2B</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;