import React, { useState } from 'react'
import './App.css';
import TodoList from './Components/TodoList';

const firstTodo = [
  {
    id:1,
    description:'Apprendre React',
    done:false
  },
  {
    id:2,
    description:'Apprendre Wordpress',
    done:false
  },
  {
    id:3,
    description:'Apprendre .Net',
    done:true
  },
  {
    id:4,
    description:'Apprendre Docker',
    done:false
  },
];

function App() {

  function handleStatusChange(id){
    console.log("id",id);
    settodoId(id);
    const todoToModify = todos.find(todo => todo.id === id);
    todoToModify.done = !todoToModify.done;
    const newTodos = todos.map(todo => (todo.id !== id ? todo : todoToModify));
    settodos(newTodos);
  }
  const [todoId, settodoId] = useState();
  const [todos,settodos] = useState(firstTodo);
  return (
    <>
      <h1>Todo App</h1>
      <div>todoId vaut : {todoId}</div>
      <TodoList todos={firstTodo} handleStatusChange={handleStatusChange} />
    </>
  );
}

export default App;
