import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ReviewsData from '../ReviewsData/ReviewsData';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
        <div ><h1 className='font-sans font-bold text-center text-5xl mb-4 text-indigo-500'> Book Reviews Forum</h1>
            <h1 className='font-sans font-bold text-center text-3xl mb-4 text-purple-500'>Total Reviews:{reviews.length}</h1>
            <div className='px-3 mx-auto grid grid-cols-3 bg-green-40 gap-2 m-2'>

                {reviews.map(review =>
                    <ReviewsData key={review.id} review={review}></ReviewsData>
                )}
            </div>
        </div>
    );
};

export default Reviews;