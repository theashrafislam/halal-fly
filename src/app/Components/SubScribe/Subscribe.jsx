import React from 'react';

const Subscribe = () => {
    return (
        <div className='max-w-7xl mx-auto text-[#F5F5F5] relative'>
            <svg width="1296" height="376" viewBox="0 0 1296 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1296" height="376" rx="30" fill="#1A5F7A" />
                <mask id="mask0_1068_1731" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1296" height="376">
                    <rect width="1296" height="376" rx="30" fill="#2B59FF" />
                </mask>
                <g mask="url(#mask0_1068_1731)">
                    <circle cx="1329" cy="-67" r="278" fill="#1A1A3C" />
                    <circle cx="1429" cy="53" r="252" fill="#524CFD" />
                    <rect x="-315" width="824" height="659.739" />
                </g>
                <path opacity="0.1" d="M735.631 0C735.572 11.6096 740.066 22.7674 748.123 31.0189C756.18 39.2704 767.14 43.9396 778.594 43.9994C790.047 44.0592 801.054 39.5047 809.195 31.3377C817.335 23.1708 821.941 12.0605 822 0.45092L735.631 0Z" fill="white" />
                <path opacity="0.1" d="M0.486969 166.317C9.87449 166.252 18.8519 162.433 25.4442 155.701C32.0365 148.968 35.7038 139.874 35.6392 130.417C35.5746 120.961 31.7835 111.919 25.0999 105.278C18.4162 98.6376 9.38752 94.9436 0 95.0087L0.486969 166.317Z" fill="white" />
                <ellipse opacity="0.1" cx="440.803" cy="288.021" rx="10.9407" ry="11.0206" fill="white" />
            </svg>

            <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-5xl font-bold text-center'>Subscribe to our newsletter</h3>
                <div className='mt-8 flex justify-center gap-5'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-md w-80 bg-[#F5F5F5] text-[#2D3E50]"
                    />
                    <button className='px-5 py-2 font-semibold text-base bg-[#F8CB2E] text-[#2D3E50] rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;