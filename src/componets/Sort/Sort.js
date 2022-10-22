import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'
 const Sort = () => {
  return (
    <React.Fragment>
      <header className='flexRow'>
            <h1 className='font-bold text-2xl'>To Do List</h1>
            <button><MdDeleteSweep className='text-xl fa-cut fa-exchange' title='Delete All!'/></button>
      </header>
    </React.Fragment>
  )
}

export default Sort;