import React, { useState,useEffect } from 'react'
import './App.css';
import TodoList from './Components/TodoList';
import TodoForms from './Components/TodoForms';

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

const key = "react.todos";

function App() {
  const [todoId, settodoId] = useState();
  const [todos,settodos] = useState(firstTodo);

  useEffect(() => {
    const todoRetrievedFromStorage = localStorage.getItem(key);
    if (todoRetrievedFromStorage) {
      settodos(JSON.parse(todoRetrievedFromStorage))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(todos));
  },[todos]);
  
  function handleStatusChange(id){
    console.log("id",id);
    settodoId(id);
    const todoToModify = todos.find(todo => todo.id === id);
    todoToModify.done = !todoToModify.done;
    const newTodos = todos.map(todo => (todo.id !== id ? todo : todoToModify));
    settodos(newTodos);
  }

  function handleTodoCreation(description){
    const newTodo = {
      id: Date.now(),
      description,
      done:false
    };
    const allTodos = [newTodo, ...todos];
    settodos(allTodos);
  }

  return (
    <div className='container'>
      <h1 class="h1">Todo App</h1>
      <TodoForms handleTodoCreation={handleTodoCreation}/>
      <h3 class="h3">Mes Todos</h3>
      <TodoList todos={todos} handleStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;
