import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='max-w-7xl mx-auto text-[#2D3E50]'>
                {/* 1st part  */}
                <div className='flex items-center justify-between pb-[82px] pt-[125px]'>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <p>There are many variations of passages of <br /> Lorem the Ipsum available but it is the <br /> majority of suffered that a alteration in <br /> that some dummy text.</p>
                        </div>
                        <div className='flex items-center gap-7'>
                            <FaTwitter className='text-2xl' />
                            <FaFacebookF className='text-2xl' />
                            <FaInstagram className='text-2xl' />
                            <FaPinterest className='text-2xl' />
                        </div>
                    </div>

                    <div>
                        <h6 className='text-base font-semibold'>Support</h6>
                        <ul className='flex flex-col gap-4 mt-7'>
                            <li className='text-base'>Customer Support</li>
                            <li className='text-base'>Privacy & Policy</li>
                            <li className='text-base'>Contact Channels</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='text-base font-semibold'>About Us</h6>
                        <ul className='flex flex-col gap-4 mt-7'>
                            <li className='text-base'>Our Story</li>
                            <li className='text-base'>Travel Blog & Tips</li>
                            <li className='text-base'>Working With Us</li>
                            <li className='text-base'>Be Our Partner</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='text-base font-semibold'>Contact Info</h6>
                        <ul className='flex flex-col gap-4 mt-7'>
                            <li className='text-base'>455 West Orchard Street <br /> Kings Mountain, NC 280867</li>
                            <li className='text-base flex gap-3'><LuPhoneCall className="text-2xl"/><span>+088 (006) 992-99-10</span></li>
                            <li className='text-base flex gap-3'><CiMail className="text-2xl"/><span>example@gmail.com</span></li>
                        </ul>
                    </div>

                </div>

                {/* 2nd part */}
                <div>
                    <p className='text-sm text-start py-7'>© 2025 Hasan, Halal Fly All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;