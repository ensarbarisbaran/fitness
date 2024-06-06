import React from 'react'
import Header from '../assets/Header';
import Post from '../assets/Posts';

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

          <section className='flex flex-col gap-y-3 '>
            {
              new Array(5).fill(1).map((_, i) => (
                <Post key={i} postIndex={i} />
              ))
            }
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
