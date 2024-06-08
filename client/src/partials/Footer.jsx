import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full bg-primary lg:h-[250px] rounded-t-xl flex justify-center '>
        <div className='p-8 flex lg:flex-row sm:flex-col  sm:items-start justify-between lg:w-[70%]  sm:gap-4 md:gap-3 lg:gap-0 '>

        <div className='flex-1 flex flex-col gap-1'>
  <h1 className='text-lg underline pb-3 font-mono'>KEŞFET</h1>
  {['Ana Sayfa', 'Hesabım', 'Hareketler', 'Makaleler'].map((item, index) => (
    <p key={index} className='relative inline-block font-serif transition-all duration-300 hover:text-lg'>
      <span>{item}</span>
    </p>
  ))}
</div>

<div className='flex-1 flex flex-col gap-1'>
  <h1 className='text-lg underline pb-3 font-mono'>BİZ KİMİZ?</h1>
  {['Hakkımızda', 'İletişim', 'KVKK', 'Kullanıcı Sözleşmesi'].map((item, index) => (
    <p key={index} className='relative inline-block font-serif transition-all duration-300 hover:text-lg'>
      <span>{item}</span>
    </p>
  ))}
</div>

<div className='flex-1 flex flex-col gap-1'>
  <h1 className='text-lg underline pb-3 font-mono'>PT OL</h1>
  {['PT Giriş', 'PT Kayıt Ol', 'Nasıl PT Hesabı Edinirim?'].map((item, index) => (
    <p key={index} className='relative inline-block font-serif transition-all duration-300 hover:text-lg'>
      <span >{item}</span>
    </p>
  ))}
</div>

        <div className='flex-[1]'>
           <div className='p-1'>
            <p className='pb-3 text-lg font-serif'>Bize mail gönder</p>
            <div className='flex flex-row'>
            <input placeholder='Merhaba!' type='text' className='rounded-xl p-2' />
            <button className='bg-secondary ml-2 py-1 px-2 rounded-xl hover:text-white focus:shadow focus:shadow-black'>
  <span className="inline-block">Gönder</span>
</button>

            </div>
            </div> 

            <div className='pt-5'>
                <h1 className='text-lg font-serif'>Bizi takip edin</h1>
                <div className='flex flex-row w-[40%] p-2 justify-between'>
                <FaInstagram size={25} className='hover:text-[#fbad50] transition-colors duration-300'/>
                <FaXTwitter size={25} className='hover:text-[#1DA1F2] transition-colors duration-300' />
                <FaFacebook size={25} className='hover:text-[#3b5998] transition-colors duration-300'/>
                </div>
            </div>

        </div>

        </div>
    </div>
  )
}

export default Footer
