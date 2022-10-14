import React from 'react'
import Quote from '../Quote/Quote'
import Calendar from '../Calender/Calnder'
 const Daily = () => {
 
  return (
    <div className='daily w-80 flex flex-col items-center justify-start bg-green-500'>
        <Quote />
        <Calendar/>
    </div>
  )
}


export default Daily;
