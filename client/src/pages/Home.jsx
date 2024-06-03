import React from 'react'
import Header from '../assets/Header';

const HomePage = () => {

  return (
    <div className='w-full h-full bg-[#FAFAFA]' >
      <Header />
      <div className='grid w-full grid-cols-3 gap-6 max-w-screen-lg mt-20 mx-auto'>
        <div className='w-full col-span-2 flex flex-col gap-y-5 border-pink-500'>
          <section className='flex p-4 space-x-4 overflow-x-scroll bg-white border border-black/10 '>
            {
              new Array(10).fill(0).map((_, i) => (
                <div key={i} className='rounded-full w-14 ring-[2px] ring-pink-500 ring-offset-2 h-14 bg-black flex-none' />
              ))
            }
          </section>

          <section className=''>
            <div className='flex flex-col w-full border border-gray-100 bg-black/50 border-1 max-h-72'>
              <div className='flex p-1 space-x-2 bg-pink-400 justify-between  items-center'>
                <div className='flex space-x-2 justify-center items-center'>
                  <div className='w-10 h-10 bg-gray-400 border-2 border-pink-400 rounded-full' />
                  <div>UserName</div>
                </div>
                <div className='select-none ml-auto w-4'>...</div>
              </div>
              <div className='w-full h-full bg-black aspect-square'></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

            </div>

          </section>
        </div>

        {/*This is our sidebar*/}
        <div className='fixed right-[10%] max-w-sm'>
          <div className='flex'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil in laudantium rerum ut explicabo doloribus ea non inventore debitis quis iusto ratione quisquam accusamus, repellat possimus iste voluptatibus sint at! Tempore alias illo aliquid ipsum impedit quam, vero iste molestias voluptates distinctio recusandae ullam cupiditate quasi, voluptatum debitis suscipit! Obcaecati eius assumenda architecto ducimus minima ad rem reprehenderit maxime quis non totam sunt porro nobis, sapiente illum neque dolores ullam quam repellat expedita. Ab numquam deleniti exercitationem impedit.
          </div>
        </div>

      </div>

    </div>

  )
}

export default HomePage
