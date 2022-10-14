import React from 'react'

 const Navbar = () => {
  return (
    <div className='xl:flex xl:flex-col xl:gap-5 xl:bg-secondary  xl:text-white xl:h-screen xl:font-bold xl:text-xl xl:p-3 xl:w-auto h-height5% p-1 text-white flex flex-row bg-secondary w-screen justify-evenly'>
      <button className='navbar_button'><i className='fa fa-bars'></i></button>
      <button className='navbar_button'><i className='fa fa-home'></i></button>
      <button className='navbar_button'><i className='fa fa-star'></i></button>
      <button className='navbar_button'><i className='fa fa-user'></i></button>
      <button className='navbar_button'><i className='fa fa-comment'></i></button>
      <button className='navbar_button'><i className='fa fa-users'></i></button>
      <button className='navbar_button'><i className='fa fa-address-book'></i></button>
    </div>
  )
}


export default Navbar;