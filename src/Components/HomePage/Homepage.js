import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='flex container'>

            <div className='flex-1 lg:flex-auto lg:w-7/12 flex flex-col justify-center h-[80vh] items-center'>
                <h1 className=' font-sans text-xl font-bold md:text-5xl p-5'>
                    <span className='text-blue-600' >Hello From My</span><br /> <span className='text-pink-600 mt-3 mr-4'>Book Reviews Forum</span>
                </h1>
                <p className='font-sans text-center font-medium text-cyan-600'>
                    It’s an exciting time to be a book reviewer. Once confined to print newspapers and journals, reviews now dot many corridors of the Internet — forever helping others discover their next great read.Like all works of art, no two book reviews will be identical. But fear not: there are a few guidelines for any aspiring book reviewer to follow.
                </p>
                <Link
                    to='/reviews'
                    className='py-2 px-6 text-white mt-3 font-semibold rounded-full bg-teal-600'
                >
                    Explore More
                </Link>
            </div>

            <div className='flex lg:flex-col lg:w-5/12 '> <img className='p-6 m-6 w-3/4' src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img></div>

        </div>
    )
}

export default Homepage