import React from 'react'

const AddPost = () => {
  return (
    <div className='flex rounded-lg mx-7 bg-white mt-6'>
      <div className=''><img src="/images/profile-pic.png" alt="profile-pic"  className='w-14 rounded-full ml-4 mr-6'/></div>
      <div className=' w-full'>
        <div className=''>
          <p className='w-max font-bold text-[1rem]'>John Nicholson</p>
          <p className='text-sm'>Public</p>
        </div>
        <div className='border-b-[1px] border-[#000000ba] mr-4 '><input className='py-10 outline-none w-full' type="text" placeholder='Whats on your mind, Jack' /></div>
        
        <div className='flex py-4 w-full'>
          <button className='flex mr-5 items-center'><img className='w-7 mr-2' src="/images/live-video.png" alt="post-icons" /><span className='text-sm font-medium'>Live Video</span></button>
          <button className='flex mr-5 items-center'><img className='w-7 mr-2' src="/images/photo.png" alt="post-icons" /><span className='text-sm font-medium'>Photo/Video</span></button>
          <button className='flex mr-5 items-center'><img className='w-7 mr-2' src="/images/feeling.png" alt="post-icons" /><span className='text-sm font-medium'>Feeling/Activity</span></button>
        </div>
      </div>
      
    </div>
  )
}

export default AddPost