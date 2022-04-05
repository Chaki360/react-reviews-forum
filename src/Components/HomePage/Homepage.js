import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ReviewsData from './ReviewsData/ReviewsData';


const Homepage = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])

    return (
        <div className='flex container'>

            <div className='flex-1 lg:flex-auto lg:w-9/12 flex flex-col justify-center h-[80vh] items-center'>
                <h1 className=' font-sans text-xl font-bold md:text-5xl p-5'>
                    <span className='text-blue-600' >Hello From The</span><br /> <span className='text-pink-600 mt-3 mr-4'>Book Reviews Forum</span>
                </h1>
                <p className='font-sans text-center font-medium text-cyan-600'>
                    It’s an exciting time to be a book reviewer. Once confined to print newspapers and journals, reviews now dot many corridors of the Internet — forever helping others discover their next great read.Like all works of art, no two book reviews will be identical. But fear not: there are a few guidelines for any aspiring book reviewer to follow.
                </p>
                <div className='mx-auto grid grid-cols-3 bg-green-50 grid-gap-3 m-2'>

                    {reviews.slice(0, 3).map(review =>
                        <ReviewsData key={review.id} review={review}></ReviewsData>
                    )}
                </div>

                <Link
                    to='/reviews'
                    className='py-2 px-6 text-white mt-3 font-semibold rounded-full bg-teal-600'
                >
                    Explore More
                </Link>
            </div>

            <div className='flex lg:flex-col lg:w-3/12 '> <img className=' mt-4 w-3/4' src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img></div>

        </div>
    )
}

export default Homepage