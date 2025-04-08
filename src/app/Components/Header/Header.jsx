"use client"

import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <nav className='bg-[#F5F5F5] shadow-md'>
            <div className='max-w-7xl mx-auto px-4 mb-[250px] md:mb-[150px] lg:mb-0 text-[#2D3E50] flex items-center justify-between py-4'>
                {/* Logo */}
                <div className='text-xl font-bold'>Logo</div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-[46px]'>
                    <li className='font-semibold cursor-pointer'>Tours</li>
                    <li className='font-semibold cursor-pointer'>Destination</li>
                    <li className='font-semibold cursor-pointer'>Blog</li>
                    <li className='font-semibold cursor-pointer'>Page</li>
                    <li className='font-semibold cursor-pointer'>Contact</li>
                </ul>

                {/* Desktop Buttons */}
                <div className='hidden lg:flex items-center gap-4'>
                    <button className='bg-white px-6 py-2 font-semibold rounded-lg'>Login</button>
                    <button className='bg-[#F8CB2E] px-6 py-2 font-semibold rounded-lg'>Sign Up</button>
                    <button className='bg-white px-6 py-2 font-semibold rounded-lg'>B2B</button>
                </div>

                {/* Mobile Hamburger */}
                <div className='lg:hidden'>
                    <button onClick={toggleDrawer}>
                        <FiMenu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>

                {/* Drawer Header (Logo + Close) */}
                <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-4 py-3 border-b">
                    <span className="font-bold text-xl">LOGO</span>
                    <button onClick={toggleDrawer}><FiX size={24} /></button>
                </div>

                {/* Drawer Content (Scrollable) */}
                <div className="overflow-y-auto px-4 py-4 flex-1">
                    <ul className="space-y-4">
                        <li className="font-medium">Tours</li>
                        <li className="font-medium">Destination</li>
                        <li className="font-medium">Blog</li>
                        <li className="font-medium">Page</li>
                        <li className="font-medium">Contact</li>
                    </ul>

                    <div className="mt-6 space-y-3">
                        <button className="block w-full bg-white px-8 py-3 font-semibold rounded-lg border">Login</button>
                        <button className="block w-full bg-yellow-400 px-8 py-3 font-semibold rounded-lg">Sign Up</button>
                        <button className="block w-full bg-white px-8 py-3 font-semibold rounded-lg border">B2B</button>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 blur-[10px] z-40"
                    onClick={toggleDrawer}
                />
            )}
        </nav>
    );
};

export default Header;