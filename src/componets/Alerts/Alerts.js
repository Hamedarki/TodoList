import React from 'react'

 const Alerts = ({modal , setModal}) => {

   const modalChange = () =>{
      setModal(true)
   }
  return (
    <div className={`${modal ? 'modal' : 'hidden'}`} >
      <h2>You Must Write Some Thing</h2>
      <button onClick={modalChange}>Ok</button>
    </div>
  )
}

export default Alerts;