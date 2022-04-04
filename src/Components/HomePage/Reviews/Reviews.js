import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
        <div>
            {reviews.map(review => <h1 className='font-bold text-2xl'>{review.name}</h1>
            )}
        </div>
    );
};

export default Reviews;