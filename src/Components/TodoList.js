import React from 'react'
import Todo from './Todo'

export default function TodoList(props){
    return(
        <ul className='list-group list-group-flush'>
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