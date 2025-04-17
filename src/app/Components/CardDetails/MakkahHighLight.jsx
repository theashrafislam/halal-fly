import React from 'react';

const MakkahHighLight = () => {
    return (
        <div className='mt-7 flex flex-col gap-3'>
            <h6 className='text-2xl font-bold'>Makkah Highlights</h6>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Masjid al-Haram:</span> Prayers in the holiest mosque in Islam.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Kaaba:</span> Heart of the Islamic world, focus of every Muslim's prayer.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Zamzam Well:</span> Drinking and collecting blessed water.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Noor:</span> Cave of Hira – first revelation site.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Thawr:</span> Site where Prophet Muhammad ﷺ hid during Hijrah.</p>
            </div>
        </div>
    );
};

export default MakkahHighLight;