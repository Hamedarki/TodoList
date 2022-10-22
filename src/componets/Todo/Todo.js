import React  from "react";
import {FaEdit} from 'react-icons/fa'
import {MdDelete , MdDoneOutline} from 'react-icons/md'

const Todo = ({text ,todo,todos, setTodos ,setInputText ,setModal , modal, inputText , inputTextHandler}) =>{

   const deleteHandler = ()=>{
      setTodos(todos.filter((el) => el.id !== todo.id))
   }

   const completedHandler = () =>{
      setTodos(todos.map((item) => {
         if(item.id === todo.id){
            return{
               ...item,
               completed: !item.completed
            }
         }
         return item
      }))
   }



   const changeText = () =>{
      // setTodos({
      //    ...todos,
      //    text : inputText
      // })    
    }

if(text.length <= 0){
   return      
 }
   return(

      <div className="todo w-width100p font-semibold lg:text-xl  text-lg">
         <li className={`${todo.completed ? 'completed' : ''} overflow-auto w-5/6 `}>{text}</li>
         <div className="lg:text-base lg:w-1/6 xl:flex lg:flex-row lg:justify-between flex flex-row justify-between gap-3 text-xs">
            <button className="complete-btn hover:animate-bounce" onClick={completedHandler} ><MdDoneOutline/></button>
            <button className="trash-btn" onClick={deleteHandler}><MdDelete/></button>
            <button  onClick={changeText}><FaEdit className="fa-cut" /></button>
         </div>

      </div>

   );
}


export default Todo;