/* Date: 14.09.2021                                                                                                     *
 * Signed-off-by: BERKAY YALÇIN < brky.yalcin@hotmail.com> 
 * GitHub : https://github.com/brkyyalcin
 */

import React, {createContext, useContext, useReducer} from "react";

export const TodoLayerContext = createContext();

export const TodoLayer =({initialState, reducer,children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer,initialState)}>
         {children}
    </TodoLayerContext.Provider>
)

export const useTodoLayerValue = () => useContext(TodoLayerContext);
