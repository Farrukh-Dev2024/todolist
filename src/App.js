import { useState, useEffect } from "react"
//import logo from './logo.svg';
import './App.css';
import TopSection from './components/TopSection.jsx'; 
import CardsSection from './components/CardsSection';

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [toeditIndex,settoditIndex] = useState(-1)
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    if (toeditIndex===-1){
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList);
      setTodos(newTodoList);
  
    }else{
      todos[toeditIndex] = newTodo;
      persistData(todos);
      setTodos(todos);
      settoditIndex(-1);
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    settoditIndex(index);
    // handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])  

  return (
    <div className="container">
      <div className="App">
        <TopSection todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} toeditIndex={toeditIndex} />
        <CardsSection todos = {todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
      </div>
    </div>
  );
}

export default App;
