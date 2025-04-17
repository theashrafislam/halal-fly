import React from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';

const CardDetailsPage = ({ params }) => {
    const { id } = params;
    // console.log(id);
    return (
        <div className='max-w-7xl mx-auto'>
            {/* route section  */}
            <div className='py-[27px] flex items-center justify-center lg:justify-start'>
                <h5 className='flex items-center gap-3 text-base'><span>Home</span><LiaAngleRightSolid /><span>Tour</span><LiaAngleRightSolid /><span>Tour Package</span></h5>
            </div>
        </div>
    );
};

export default CardDetailsPage;