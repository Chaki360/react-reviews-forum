import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='flex'>

            <div className='flex-1 lg:flex-auto lg:w-7/12 flex flex-col justify-center h-[80vh] items-center'>
                <h1 className=' font-sans text-xl md:text-5xl p-6 m-6'>
                    Hello From My Project AnaLysis
                </h1>

            </div>

            <div className='flex lg:flex-col lg:w-5/12 '>col2</div>
            <img className='p-6 m-6' src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
        </div>
    )
}

export default Homepage