import React from 'react'
import Todo from './Todo'

export default function TodoList(props){
    return(
        <ul>
            {props.todos.map(todo => (
            <Todo 
                key={todo.id} 
                data={todo} 
                handleStatusChange={props.handleStatusChange}
            />
            ))}
        </ul>
    )
}