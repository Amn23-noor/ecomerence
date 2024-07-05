import React from 'react'

const HomeSection = () => {
  return (
    // Making Card section
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3'>
    <div className='h-[13rem] w-[10rem]'>
      <img className='object-cover object-top w-full h-full' 
      src="https://shahzebsaeed.com/cdn/shop/files/FS1891-4_800x.jpg?v=1719916440" alt="" srcset="" />
    </div>
<div className='p-4'>
<h3 className='text-lg font-medium text-gray-900'>Dark Purple Self, Cutaway Collar, Elite Edition</h3>
<p>Men’s Formal Shirt (FS-1891)</p>
</div>
      
    </div>
  )
}

export default HomeSection