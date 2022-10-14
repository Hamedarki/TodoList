import React from "react";
import Todo from './Todo';
const TodoList = ({todos , setTodos  ,inputText, filterdTodos , setInputText}) =>{

 
return(
      <div className="todo-container ">
         <ul className="todo-list xl:w-3/4  w-5/6 ">
            {filterdTodos.map((todo)=>
               <Todo todos={todos} setInputText={setInputText} inputText={inputText} setTodos={setTodos} text={todo.text} todo={todo} id={todo.id} key={todo.id}/>)}
         </ul>
      </div>
   )
};


export default TodoList;