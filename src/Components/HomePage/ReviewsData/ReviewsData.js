import React from 'react';

const ReviewsData = ({ review }) => {
    return (


        <div className="max-w-sm text-center rounded overflow-hidden shadow-lg">

            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{review.name}</div>
                <div className='font-semibold text-xl m-2'>Book:{review.book}</div>
                <p className="text-gray-700 text-base m-2">
                    {review.text}
                </p>
                <span className='font-bold text-xl mt-3'>Rating:{review.rating}</span>
            </div>
        </div>

    );
};

export default ReviewsData;