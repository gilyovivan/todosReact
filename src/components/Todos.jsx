import React from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

function Todos( {todos, setTodos} ) {
    return (
        <>
        {todos.map((el, index) => <Todo el={el} key={uuid()} setTodos={setTodos} index={index} todos={todos}/>)}
            
        </>
    );
}

export default Todos;