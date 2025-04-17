import React from 'react';

const CardDetailsPage = ({ params }) => {
    const { id } = params;
    // console.log(id);
    return (
        <div>
            <h1>Hello I am Card Details Page. {id}</h1>
        </div>
    );
};

export default CardDetailsPage;