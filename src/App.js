// import axios from 'axios';
import { useEffect, useState  } from 'react';
import './App.css';
import React from 'react';
// import axios from 'axios';
import Form from './componets/Form/From';
import Navbar from './componets/Navbar/Navbar';
import Sort from './componets/Sort/Sort';
import TodoList from './componets/Todo/TodoList';
function App() {
  // const [users,setUsers]=useState([])
 
const [inputText,setInputText] = useState('')

const [todos,setTodos] = useState([]);

const [status,setStatus] =useState('all')

const [filterdTodos,setFilterdTodos] = useState([])

const [open,setOpen] = useState(false)

const changeNav = ()=>{
  setOpen(!open)
}

const filterHandler = () =>{
  switch(status){
    case 'completed':
      setFilterdTodos(todos.filter((todo)=>todo.completed === true));
      break;
    case 'uncompleted':
      setFilterdTodos(todos.filter((todo)=>todo.completed === false));
      break;
      default:
        setFilterdTodos(todos);
      break;
  }
}

useEffect(()=>{
  filterHandler();
},[])



  return(
    <React.Fragment>
      <Navbar open={open} setOpen={setOpen} changeNav={changeNav} />
      <div className={`${open ? 'h-height85%' : 'h-height95%'} bg-bg-color lg:m-auto xl:flexCol xl:gap-8 xl:px-8 xl:py-7 xl:justify-start xl:h-screen xl:m-auto xl:w-width780p flex flex-col w-auto justify-start items-center p-6 gap-8  h-height95%  `}>
        <Sort/>
        <Form inputText={inputText} setInputText={setInputText} filterdTodos={filterdTodos} filterHandler={filterHandler} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
        <TodoList inputText={inputText} todos={todos} setTodos={setTodos} filterdTodos={filterdTodos} setInputText={setInputText}/>
      </div>
    </React.Fragment>
 
  )
}




export default App;




// const saveLocalTodos = () =>{
 
//     localStorage.setItem('todos',JSON.stringify(todos));
//   }


// const getLocalStore = ()=>{
//   if(localStorage.getItem('todos') === null){
//     localStorage.setItem('todos', JSON.stringify([]));
//   }else{
//     let todoLocal = localStorage.getItem('todos',JSON.stringify(todos));
//     setTodos(todoLocal)
//   }
// }
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/albums').then(res=>{
//       setUsers(res.data)
//       console.log(res.data)
//     }).catch()
//   },[])


//   useEffect=(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/todos').then(Response => {
//        return Response.data
//     }).catch()
//  },[])


    //  {/* <ul className='container'>
    //     {/* {users.map(user=><li key={user.id}>
    //         <div className='box'>
    //           <p>{user.title}</p>
    //           <p style={{color: user.completed === true ? 'blue' : 'red'}}>{user.completed === true ? 'true' : 'false'}</p>
    //         </div> */}
  
        //     </li>)}
        //   </ul> */}
        // </div>