import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import LeftSidebar from '../components/LeftSidebar.jsx'
import RightSidebar from '../components/RightSidebar.jsx'
import Story from '../components/Story.jsx'
import AddPost from '../components/AddPost.jsx'
import Post from '../components/Post.jsx'
import './App.css'



function App() {


  return (
    <>
    <Navbar />
      <div className='flex w-full border-2 border-red-600 justify-evenly'>
        <div className='basis-1/4 border-2 border-green-600'>
          <LeftSidebar/>
        </div>
        <div className="mainContent basis-2/4 border-2 border-yellow-600">
          <div><Story /></div>
          <div><AddPost /></div>
          <div><Post /></div>
        </div>
        <div className='basis-1/4 border-2 border-pink-600'>
          <RightSidebar/>
        </div>
      </div>
    </>
    
   
  )
}

export default App

