import React from "react";
import {MdAddBox} from 'react-icons/md'


const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: (Math.random() * 10000)
            }
        ]);
        localStorage.setItem('localtask',JSON.stringify([...todos]))
        setInputText('');
    }
  

    const filterHandler =(e)=>{
        setStatus(e.target.value)
    }
    

    return (
        <form className="lg:flex lg:flex-row lg:gap-4 lg:items-center  lg:w-width100p lg:justify-center flex flex-row items-center flex-wrap justify-center gap-2">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type={'text'}
                    className={`bg-white-smoke w-3/4  lg:rounded-l-2xl lg:w-1/2  rounded-l-2xl h-8 focus:outline-none  placeholder:font-semibold p-1 placeholder:pl-2 border-gray-500 border-border-1px   ${inputText.length === 0 
                        ? 'shake'
                        : ''}`}
                        placeholder='What should you do today?'/>
                <button type={'submit'} onClick={submitTodoHandler} className='right-2 relative lg:right-4  bg-blue py-2 px-3 text-black  lg:rounded-r-2xl rounded-r-2xl lg:relative' >
                    < MdAddBox className=" " />
                </button>
                <select placeholder="hi" onChange={filterHandler} className="select_item bg-blue mt-5 lg:mt-0 px-2 font-semibold text-sm py-1">
                    <option value={'all'} >All</option>
                    <option value={'completed'} >completed</option>
                    <option value={'uncompleted'} >uncompleted</option>
                </select>
        </form>
    )
}

export default Form;