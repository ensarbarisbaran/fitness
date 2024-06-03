import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import { BsSearch } from "react-icons/bs"
import { Add, Cross, Home, Heart, Messenger, search, Compass, Profile, } from "../HeaderIcons";
import HeaderIcon from '../HeaderIcon';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HEADER_ITEMS = [
    {
        icon: Home,
        url: "/",
        name: "Home",
    },
    {
        icon: Messenger,
        url: "/",
        name: "Messenger",
    },
    {
        icon: Add,
        url: "/",
        name: "Add",
    },
    {
        icon: Compass,
        url: "/",
        name: "Discover",
    },
    {
        icon: Heart,
        url: "/",
        name: "Likes",
    },
    {
        icon: Profile,
        url: "/",
        name: "Profile",
    }

]

const Header = () => {
    return (
        <header className='w-full flex items-center justify-around h-16 bg-white shadow-md'>
            <Link href="/">
                <div className='text-xl font-semibold tracking-wider cursor-pointer select-none'>FITCOACH</div>
            </Link>

            <div className='flex bg-gray-100 group space-x-4 items-center border-gray-400 rounded-lg px-2'>
                <label htmlFor="search" className='group-active:border-gray-400'>
                    <BsSearch className='text-lg text-gray-400' />
                </label>
                <input type="search"
                    name="search"
                    id="search"
                    className='bg-gray-100 hover:bg-transparent placeholder:text-sm px-2 py-1 outline-none w-full rounded-sm  transition ' placeholder='search' />
            </div>
            <div className='flex space-x-2 items-center'>
                <div className='flex space-x-4'>
                    {HEADER_ITEMS.map((item, index) => (
                        <HeaderIcon
                            Icon={item.icon}
                            key={item.name}
                        />
                    ))}
                    <button className='bg-[#0095F6] py-2 h-4/5 text-white active:scale-95 transform transition  disabled:bg-opacity-50 px-6 disabled:scale-100 rounded text-sm font-semibold'>
                        Logout
                    </button>




                </div>
            </div>
        </header>
    )
}

export default Header