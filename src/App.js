/* Date: 14.09.2021                                                                                                     *
 * Signed-off-by: BERKAY YALÇIN < brky.yalcin@hotmail.com> 
 * GitHub : https://github.com/brkyyalcin
 */

import React, {useState ,useEffect,useRef} from 'react';
import {useTodoLayerValue} from "./context/TodoContext";
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] =useState('');  
  const inputRef = useRef(null);
  
  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  const handlerSubmit=(event) =>{
    event.preventDefault();
    if(!content && content == "") return;

    const newTodo={
      id: Math.floor(Math.random()*428374324),
      content,
      isCompleted:false
    };

    dispatch({
      type:"ADD_TODO",
      payload:newTodo
    });
    setContent('');
  };
  return (
    <div className="container ">
      <form onSubmit={handlerSubmit} className="todo-form">
          <input className="todo-input" type="text" onChange={(event)=> setContent(event.target.value)} value={content} ref={inputRef} />
          <button className="todo-button">
            Ekle 
          </button>
      </form>

      <TodoList todos={todos} />
    </div>
  )
}

export default App;