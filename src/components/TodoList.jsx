/* Date: 14.09.2021                                                                                                     *
 * Signed-off-by: BERKAY YALÇIN < brky.yalcin@hotmail.com> 
 * GitHub : https://github.com/brkyyalcin
 */

import React from 'react';
import TodoItem from './TodoItem';

const TodoList =({todos}) => {
    return (
        <div className="todo-list">
            {
  
                todos &&  todos.map((todo) =>(
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodoList;