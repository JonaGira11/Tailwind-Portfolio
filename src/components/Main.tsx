import { ReactNode } from 'react'


const img: string = new URL("../images/banner-main.jpg", import.meta.url).href

const Main = () => {
  return (
    <div id="main" aria-label='main section'>
      <img src={img} className="w-full h-screen object-cover scale-x-[1]" alt='background image' />
      <div className='w-full h-screen absolute top-0 left-0 bg-gray-200/90 dark:bg-neutral-900'>
        <div className='max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white '>
            I am Jonathan</h1>
          <h2 className='sm:text-3xl text-2xl text gray-600 dark:text-gray-300'>I'm a Web Developer</h2>
        </div>

      </div>
    </div>
  )
}

export default Main