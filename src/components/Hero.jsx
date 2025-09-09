import React from 'react'

function Hero() {
  return (
    <>
      <div className='container flex flex-col sm:flex-row pt-10'>
        <div className='flex flex-1 items-center justify-center'>
            <img src="images/5.png" alt="" className='w-100'/>            
        </div>
        <div className='flex flex-1 items-center justify-center'>
            <h1 className='dark:text-white'>Ian Clark</h1>
        </div>
      </div>
    </>
  )
}

export default Hero
