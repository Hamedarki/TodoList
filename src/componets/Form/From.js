import React from "react";


const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                compoletd: false,
                id: (Math.random() * 10000)
            }
        ]);
        setInputText('');
    }
  

    const filterHandler =(e)=>{
        setStatus(e.target.value)
    }

    return (
        <form className="xl:flex xl:flex-row xl:gap-4 xl:items-center  xl:w-width100p xl:justify-center flex flex-row items-center flex-wrap justify-center gap-2">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type={'text'}
                    className={`bg-white-smoke w-3/4  xl:rounded-l-2xl xl:w-1/2  rounded-l-2xl h-8 focus:outline-none  placeholder:font-semibold p-1 placeholder:pl-2 border-gray-500 border-border-1px   ${inputText.length === 0 
                        ? 'shake'
                        : ''}`}
                        placeholder='What should you do today?'/>
                <button type={'submit'} onClick={submitTodoHandler} className='right-2 relative xl:right-4  xl:relative' >
                    <i className="fas fa-plus-square bg-blue py-2 px-3 text-black  xl:rounded-r-2xl rounded-r-2xl "></i>
                </button>
                <select placeholder="hi" onChange={filterHandler} className="select_item bg-blue mt-5 xl:mt-0 px-2 font-semibold text-sm py-1">
                    <option disabled  >Choose a Situation</option>
                    <option value={'all'} >All</option>
                    <option value={'completed'} >completed</option>
                    <option value={'uncompleted'} >uncompleted</option>
                </select>
        </form>
    )
}

export default Form;