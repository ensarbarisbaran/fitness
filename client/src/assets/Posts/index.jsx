import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark, BsThreeDots } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'



const Post = ({ postIndex }) => {
    return (
        <div className='flex flex-col border-gray-200 w-full border '>
            <div className='flex p-2 w-full   justify-between  items-center'>
                <div className='flex space-x-2 justify-center items-center'>
                    <div className='w-10 h-10 bg-black border-2  rounded-full' />
                    <div>UserName</div>
                </div>
                <div className='select-none  w-4'>
                    <BsThreeDots className="text-lg" />
                </div>
            </div>
            <div className='w-full h-full bg-black aspect-square bg-cover' style={{ "backgroundImage": "url(/baris.jpg)" }}> </div>
            <div className='flex justify-between p-2'>
                <div className='flex space-x-2'>
                    <div><AiOutlineHeart size={25} className='text-black hover:text-black/50 cursor-pointer' /></div>
                    <div><FaRegComment size={22} className='text-black hover:text-black/50 cursor-pointer' /></div>
                    <div><IoShareOutline size={22} className='text-black hover:text-black/50 cursor-pointer' /> </div>
                </div>
                <div><BsBookmark size={20} className='text-black hover:text-black/50 cursor-pointer' /></div>
            </div>
            <div className='px-2'>1000 likes </div>
            <div className='p-2'>
                <div className='flex flex-col space-y-1'>
                    {
                        new Array(3).fill(0).map((_, i) => (
                            <div key={i} className='flex space-x-2'>
                                <div className='font-medium'>Alperenbey34b2@gmail.com</div>
                                <div>Çok yakışıklı çıkmışsın {i + 1} </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='px-2 '>
                3 hours ago
            </div>
            <div className='px-2 flex  mt-1 py-2 items-center space-x-3 border-t border-gray-200'>
                <div>
                    <BsEmojiSmile className='text-xl' />
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='flex w-full px-2'>
                    <div className='w-full'>
                        <input type="text" name={`comment ${postIndex}`} id={`comment ${postIndex} `} className='w-full outline-none bg-white '
                            placeholder='Add a comment...' />
                    </div>
                    <div>
                        <button className='font-semibold text-blue-600 text-sm'>
                            Post
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Post
