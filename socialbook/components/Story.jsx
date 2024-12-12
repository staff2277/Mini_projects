import React from 'react'

const Story = () => {
  return (
    <div>
      <div className='flex gap-5 justify-center mt-3'>
        <div className='flex relative'> <span className='absolute w-full text-white bottom-1 text-center z-10'>Post Story</span> <div><img src="/images/upload.png" className='status-member absolute w-9 rounded-full bottom-10 left-10 z-10' alt="member-img " /></div> <img src="/images/status-1.png" alt="story-img" className='h-52 rounded-lg brightness-75'/></div>
        <div className='flex relative'> <span className='absolute w-full text-white bottom-1 text-center z-10'>Alison</span> <div><img src="/images/member-1.png" className='status-member absolute w-10 rounded-full top-2 left-3 border-4 border-[#1876f2] z-10' alt="member-img" /></div> <img src="/images/status-2.png" alt="story-img" className='h-52 rounded-lg brightness-75'/></div>
        <div className='flex relative'> <span className='absolute w-full text-white bottom-1 text-center z-10'>Jackson</span> <div><img src="/images/member-2.png" className='status-member absolute w-10 rounded-full top-2 left-3 border-4 border-[#1876f2] z-10' alt="member-img" /></div> <img src="/images/status-3.png" alt="story-img" className='h-52 rounded-lg brightness-75'/></div>
        <div className='flex relative'> <span className='absolute w-full text-white bottom-1 text-center z-10'>Samona</span> <div><img src="/images/member-3.png" className='status-member absolute w-10 rounded-full top-2 left-3 border-4 border-[#1876f2] z-10' alt="member-img" /></div> <img src="/images/status-4.png" alt="story-img" className='h-52 rounded-lg brightness-75'/></div>
        <div className='flex relative'> <span className='absolute w-full text-white bottom-1 text-center z-10'>John Doe</span> <div><img src="/images/member-4.png" className='status-member absolute w-10 rounded-full top-2 left-3 border-4 border-[#1876f2] z-10' alt="member-img" /></div> <img src="/images/status-5.png" alt="story-img" className='h-52 rounded-lg brightness-75'/></div>
      </div> 
    </div>
  )
}

export default Story