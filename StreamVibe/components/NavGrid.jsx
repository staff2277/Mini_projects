import React from 'react'

const NavGrid = (props) => {
  console.log(props.imageUrl);
  return (
    <img src={props.imageUrl} alt="img-grid" className='w-44' />
  )
}

export default NavGrid