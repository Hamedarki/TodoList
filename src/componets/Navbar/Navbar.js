import React from 'react'
import '../../App.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
 const Navbar = ({open , setOpen , changeNav}) => {
  

  
  return (
    <div className={`${open ? 'lg:w-44' : 'lg:w-16'} ${open ? 'h-height10vh' : 'h-height5vh'}  duration-1000 lg:flex lg:flex-col lg:items-center lg:justify-evenly lg:gap-5 lg:bg-secondary  lg:text-white lg:h-screen lg:font-bold lg:text-lg lg:p-3 p-1 text-white flex flex-row bg-secondary w-screen justify-evenly`}>
      <button  onClick={changeNav} title='See More...'><i className={`${open && 'rotate-180'}  duration-1000 p-2 overflow-hidden flex justify-start fas fa-arrow-circle-right	`}  /></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-4 hover:animate-pulse`}><i className='fa fa-home ml-1'></i><p className='w-1/2 text-xs lg:text-sm  overflow-hidden'>Home Page</p></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-4 hover:animate-pulse`}><i className='fa fa-star ml-1'></i><p className='w-1/2 text-xs lg:text-sm  overflow-hidden'>Stars</p></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-5 hover:animate-pulse`}><i className='fa fa-user ml-1'></i><p className='w-1/2 text-xs lg:text-sm  overflow-hidden'>User Account</p></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-4 hover:animate-pulse`}><i className='fa fa-comment ml-1'></i><p className='w-1/2 text-xs lg:text-sm  overflow-hidden'>Comments</p></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-4 hover:animate-pulse`}><i className='fa fa-users ml-1'></i><p className='w-1/2 text-xs lg:text-sm  overflow-hidden'>Users</p></button>
      <button className={`p-0.5 w-width100p rounded-sm relative flex lg:flex-row flex-col lg:items-center items-center lg:text-base text-sm justify-between overflow-hidden gap-2 mt-2 lg:m-0 lg:gap-4 hover:animate-pulse`}><i className='fa fa-address-book ml-1'></i><p className=' w-1/2 text-xs lg:text-sm overflow-hidden'>Address</p></button>
    </div>
  )
}


export default Navbar;