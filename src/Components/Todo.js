import React from 'react'

export default function Todo(props){
    const todo = props.data;
    return(
        <div>
            <input type="checkbox" 
                checked={todo.done} 
                onChange={() => props.handleStatusChange(todo.id)} 
            />
            {todo.id}-{todo.description}-{todo.done ? "fait" : "A faire"}
        </div>
    )
}