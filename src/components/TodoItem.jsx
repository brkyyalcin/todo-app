/* Date: 14.09.2021                                                                                                     *
 * Signed-off-by: BERKAY YALÇIN < brky.yalcin@hotmail.com> 
 * GitHub : https://github.com/brkyyalcin
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import {GrFormClose, GrFormEdit, GrFormCheckmark} from "react-icons/gr";
import { useTodoLayerValue } from '../context/TodoContext';


const TodoItem = ({ todo }) => {
    const [{},dispatch] = useTodoLayerValue();
    const [editable,setEditable] = useState(false);
    const [content,setContent] = useState(todo.content);

    const removeTodo = TodoId =>{
        dispatch({
            type:"REMOVE_TODO",
            payload:TodoId
        });
    }
    const completeTodo = TodoId=>{
        dispatch({
            type:"COMPLETE_TODO",
            payload:TodoId
        });
    };
    const updateTodo = ({TodoId,newValue})=>{
        dispatch({
            type:"UPDATE_TODO",
            payload:{
                TodoId,
                newValue
            }
        });
    };

    const todostyle= clsx({
        ["todo-row"] : true,
        ["completed"]: todo.isCompleted
    });

    return (
        <div className={todostyle}>
            <div onClick={() => editable ? '': completeTodo(todo.id)}>
                {
                    editable ? <input className="todo-input-edit" type="text" value={content} onChange={event =>setContent(event.target.value)}  /> : todo.content
                }
                
            </div>
            <div className="todo-icons">
                <GrFormClose className="todo-icon" onClick={()=>removeTodo(todo.id)} />
                {
                    editable ? <GrFormCheckmark  className="todo-icon" onClick={()=>{
                        updateTodo({TodoId:todo.id,newValue:content});
                        setContent("");
                        setEditable(false);                        
                    }} />
                    : <GrFormEdit className="todo-icon" onClick={() =>setEditable(true)}  />
                } 
               
            </div>
        </div>
    );
};

export default TodoItem;
