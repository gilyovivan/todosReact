import Form from './components/Form';
import Todos from './components/Todos';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  

  
  
  
  const localStorageTodos = JSON.parse(
    localStorage.getItem('todoslocal')
    );
    const [todos, setTodos] = useState(localStorage.getItem('todoslocal') !== null ? localStorageTodos : [])

    useEffect(() => {
      updateLocalStorage()
      
    }, [todos]);

  const  updateLocalStorage = () => {
    localStorage.setItem('todoslocal', JSON.stringify(todos));
  }



  return (
    <div className="App">
      <Form setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
