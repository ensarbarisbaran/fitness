import React from 'react'
import { Link } from "react-scroll";
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci"
import { FaTimes } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const content =
        <>
            <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
                <ul className='text-center text-xl p-20'>
                    <Link to="home" spy={true} smooth={true}>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
                            Home
                        </li>
                    </Link>
                    <Link to="home" spy={true} smooth={true}>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
                            About
                        </li>
                    </Link>
                    <Link to="home" spy={true} smooth={true}>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
                            Services
                        </li>
                    </Link>
                    <Link to="home" spy={true} smooth={true}>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
                            Login
                        </li>
                    </Link>
                    <Link to="home" spy={true} smooth={true}>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800">
                            Contact
                        </li>
                    </Link>
                </ul>

            </div>

        </>


    return (

        <nav >
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 bg-slate-900 '>
                <div className='flex items-center flex-1 '>
                    <span className='text-3xl font-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden'>
                    <div className='flex10' >
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <p >
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover: border-fuchsia-600 cursor-pointer' onClick={() => navigate("/")}>
                                    Home
                                </li>
                            </p>
                            <p >
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover: border-fuchsia-600 cursor-pointer' onClick={() => navigate("/About")}>
                                    About
                                </li>
                            </p>
                            <p >
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover: border-fuchsia-600 cursor-pointer' onClick={() => navigate("/Services")}>
                                    Services
                                </li>
                            </p>
                            <p >
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover: border-fuchsia-600 cursor-pointer' onClick={() => navigate(`/Login`)}>
                                    Login
                                </li>

                            </p>

                            <p >
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover: border-fuchsia-600 cursor-pointer' onClick={() => navigate("/Register")}>
                                    Register
                                </li>
                            </p>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className='block sm:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav >

    )
}

export default Navbar