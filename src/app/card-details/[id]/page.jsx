import DetailsHero from '@/app/Components/CardDetails/DetailsHero';
import IncludExclud from '@/app/Components/CardDetails/IncludExclud';
import MakkahHighLight from '@/app/Components/CardDetails/MakkahHighLight';
import MedinaHighLight from '@/app/Components/CardDetails/MedinaHighLight';
import TourMap from '@/app/Components/CardDetails/TourMap';
import TourPlan from '@/app/Components/CardDetails/TourPlan';
import React from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';

const CardDetailsPage = ({ params }) => {
    const { id } = params;

    return (
        <div className=''>
            {/* route section  */}
            <div className='py-[27px] flex items-center justify-center max-w-7xl mx-auto'>
                <h5 className='flex items-center gap-3 text-base'><span>Home</span><LiaAngleRightSolid /><span>Tour</span><LiaAngleRightSolid /><span>Tour Package</span></h5>
            </div>
            {/* hero section  */}
            <DetailsHero />

            <div className='max-w-7xl mx-auto'>
                <div className='w-2/3 pr-10'>
                    {/* Makkah Highlights */}
                    <MakkahHighLight />

                    {/* Medinah Highlights */}
                    <MedinaHighLight />

                    {/* Included/Excluded */}
                    <IncludExclud />

                    {/* Tour Plan */}
                    <TourPlan />

                    {/* Tour Map */}
                    <TourMap />
                </div>
            </div>
        </div>
    );
};

export default CardDetailsPage;