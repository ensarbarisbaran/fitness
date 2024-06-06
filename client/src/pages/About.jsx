import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineFitnessCenter } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { IoIosCodeWorking } from "react-icons/io";




function About() {
    const navigate = useNavigate();
    return (

    <div className=' shadow-lg bg-primary '>
        <div className=''>
        
        <div className='flex flex-row '>
            <img className='h-[90vh] w-1/2 ' src='cio.jpeg'/>
            <img className='h-[90vh] w-1/2 ' src='cio.jpeg'/>
            
        </div>
        <div className='absolute w-full h-[90vh] bg-[#00000091] top-0 sm:mt-[68px] lg:mt-[76px] flex items-center justify-center'>
            <p className='text-white font-bold text-6xl'>Hakkımızda</p>
        </div>

        <div className='flex items-center justify-center h-[100vh]'>
            <p className='text-black font-serif text-4xl text-center '>
                "Kas yapın, adam olun. Spor yaparken mal gibi şarkılar dinlemeyin."
            </p>
        </div>

        <div className='mx-48'>

        <div className='flex flex-row '>
           <div className='flex-1 p-3'>
            <p className='indent-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Aperiam provident veniam aliquid minima quidem voluptas ad mollitia molestias et incidunt quibusdam, quod deserunt ex sunt in ut dignissimos iure quis.
            </p>
            <br/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime quae provident perspiciatis ipsum labore eius saepe delectus facilis? Harum quibusdam, consectetur ipsam esse sint hic veniam expedita non fugiat.
            </p>
            </div>
            <div className='flex-1 p-3'>
            <p className='indent-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, optio ipsa. Ipsum consequuntur rerum tenetur quae quibusdam nesciunt excepturi aspernatur esse quia cupiditate, obcaecati architecto blanditiis, suscipit voluptatum id exercitationem.
            </p>
            <br/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime quae provident perspiciatis ipsum labore eius saepe delectus facilis? Harum quibusdam, consectetur ipsam esse sint hic veniam expedita non fugiat.
            </p>
            </div>

        </div>

        <div className='my-4'>
            <img className='w-full h-[65vh]' src='ensar.jpeg'/>
        </div>

        <div className='flex flex-row gap-8'>
            <div className='flex-1'>
                <div className='flex flex-row items-center justify-center'>
                <MdOutlineFitnessCenter className='text-secondary text-3xl  '/>       <h1 className=' text-3xl p-2 font-serif underline w-full '>Sporcu</h1>
                </div>
            <p className='leading-loose'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Error velit maxime ut maiores, nulla numquam corporis esse, necessitatibus inventore veritatis ad voluptatem minus perspiciatis nostrum rerum sequi excepturi nemo tempora?
            </p>
            </div>
            <div className='flex-1'>
            <div className='flex flex-row items-center justify-center'>
                <GiMaterialsScience className='text-secondary text-3xl  '/>       <h1 className=' text-3xl p-2 font-serif underline w-full '>Bilimsel</h1>
                </div>
            <p className='leading-loose'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Error velit maxime ut maiores, nulla numquam corporis esse, necessitatibus inventore veritatis ad voluptatem minus perspiciatis nostrum rerum sequi excepturi nemo tempora?
            </p>
            </div>
            <div className='flex-1'>
            <div className='flex flex-row items-center justify-center'>
                <IoIosCodeWorking className='text-secondary text-3xl  '/>       <h1 className=' text-3xl p-2 font-serif underline w-full '>Teknoloji</h1>
                </div>
            <p className='leading-loose'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Error velit maxime ut maiores, nulla numquam corporis esse, necessitatibus inventore veritatis ad voluptatem minus perspiciatis nostrum rerum sequi excepturi nemo tempora?
            </p>
            </div>
        </div>

        </div>

        </div>
    </div>
    )
}

export default About