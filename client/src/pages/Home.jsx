import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { BsSearch } from "react-icons/bs"
import {
  Add, Cross, Home, Heart, Messenger, search, Compass,
  Profile,
} from "../assets/HeaderIcons";
import HeaderIcon from '../assets/HeaderIcon';


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

const HomePage = () => {

  return (
    <div className='w-full h-full bg-[#FAFAFA]' >
      <header className='w-full flex items-center justify-around h-16 bg-white shadow-md'>
        <div className='text-xl font-semibold tracking-wider select-none'>FITCOACH</div>
        <div className='flex bg-gray-100 group space-x-4 items-center border-gray-400 rounded-lg px-2'>
          <label htmlFor="search" className='group-active:border-gray-400'>
            <BsSearch className='text-lg text-gray-400' />
          </label>
          <input type="search"
            name="search"
            id="search"
            className='bg-gray-100 hover:bg-transparent placeholder:text-sm px-2 py-1 outline-none w-full rounded-sm  transition ' placeholder='search' />
        </div>
        <div>
          <div className='flex space-x-4'>
            {
              HEADER_ITEMS.map((item, index) => (
                <HeaderIcon
                  Icon={item.icon}
                  key={item.name}
                />
              ))
            }
          </div>
        </div>
      </header>


    </div>
  )
}

export default HomePage
