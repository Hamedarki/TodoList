import React from 'react'

 const Navbar = ({open , setOpen , changeNav}) => {
  

  console.log(open)
  
  return (
    <div className={`${open ? 'xl:w-52' : 'xl:w-16'} ${open ? 'h-height15%' : 'h-height5%'} duration-1000 xl:flex xl:flex-col xl:items-center xl:justify-evenly xl:gap-5 xl:bg-secondary  xl:text-white xl:h-screen xl:font-bold xl:text-xl xl:p-3  p-1 text-white flex flex-row bg-secondary w-screen justify-evenly`}>
      <button  onClick={changeNav}><i className={`${open && 'rotate-180'}  duration-1000 p-2 overflow-hidden flex justify-start fa fa-chevron-circle-right`}></i></button>
      <button className='md:navbar_button hover:animate-pulse'><i className='fa fa-home ml-1'></i><p className='w-1/2 overflow-hidden'>Home Page</p></button>
      <button className='xl:navbar_button hover:animate-pulse'><i className='fa fa-star ml-1'></i><p className='w-1/2 overflow-hidden'>Stars</p></button>
      <button className='xl:navbar_button hover:animate-pulse'><i className='fa fa-user ml-1'></i><p className='w-1/2 overflow-hidden'>User Account</p></button>
      <button className='xl:navbar_button hover:animate-pulse'><i className='fa fa-comment ml-1'></i><p className='w-1/2 overflow-hidden'>Comments</p></button>
      <button className='xl:navbar_button hover:animate-pulse'><i className='fa fa-users ml-1'></i><p className='w-1/2 overflow-hidden'>Users</p></button>
      <button className='xl:navbar_button hover:animate-pulse'><i className='fa fa-address-book ml-1'></i><p className=' w-1/2  overflow-hidden'>Address</p></button>
    </div>
  )
}


export default Navbar;