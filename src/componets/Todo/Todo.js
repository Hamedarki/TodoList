import React  from "react";
const Todo = ({text ,todo,todos, setTodos ,setInputText , inputText , inputTextHandler}) =>{
   

  
   // const changeInputButton = (e) =>{
   //    setInputText(e.target.value)
   // }
   ///Events
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
   // const submitChangehandler = (e)=>{
   //    e.preventDefault();
   //      setTodos([
   //          ...todos, {
   //              text: inputText,
   //              compoletd: false,
   //              id: (Math.random() * 10000)
   //          }
   //      ]);
   //      setInputText('');
   // }

//    const chnageInputHandler =()=>{
//       setTodos(todos.map((item)=>{
//          return{
//             ...item,
//             text : <form>
//                   <input value={inputText}
//                     onChange={changeInputButton}
//                     type={'text'}/>
//                   <button type={'submit'} onClick={submitChangehandler}>submit</button>
//                    </form>
//          }
//       }));
//      setInputText('');
//  }
   


   if(text.length <= 0){
      return 
    }
   return(

      <div className="todo w-width100p font-semibold xl:text-2xl  text-lg">
         <li className={`${todo.completed ? 'completed' : ''} overflow-auto w-5/6 `}>{text}</li>
         <div className="xl:text-base xl:w-1/6 xl:flex xl:flex-row xl:justify-between flex flex-row justify-between gap-3 text-xs">
            <button className="complete-btn hover:animate-bounce" onClick={completedHandler} ><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
            <button ><i className="fas fa-cut"></i></button>
         </div>

      </div>

   );
}


export default Todo;