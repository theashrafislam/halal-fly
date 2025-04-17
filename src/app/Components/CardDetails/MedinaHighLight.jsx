import React from 'react';

const MedinaHighLight = () => {
    return (
        <div className='mt-7 flex flex-col gap-3'>
            <h6 className='text-2xl font-bold'>Medinah Highlights</h6>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Masjid al-Nabawi:</span> Praying in the Prophet’s Mosque.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Rawdah:</span> Area between Prophet’s tomb and pulpit, considered part of Paradise.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Zamzam Well:</span> Drinking and collecting blessed water.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Quba Mosque :</span> First mosque built in Islam.</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#B82525]'></div>
                <p className='text-base text-[#444]'><span className='font-semibold'>Jabal al-Thawr:</span> Site of the famous Battle of Uhud.</p>
            </div>
        </div>
    );
};

export default MedinaHighLight;