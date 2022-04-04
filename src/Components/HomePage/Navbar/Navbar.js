import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div><Link to='/' className='text-3xl font-sans font-medium'>Project AnaLysis</Link></div>
            <div className='flex gap-4 font-semibold text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About Us</Link>
            </div>
        </div>
    );
};

export default Navbar;