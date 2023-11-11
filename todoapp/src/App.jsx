import { useEffect } from "react";
import { TodoContextProvider } from "./context/TodoContext";


function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo){
    setTodos((prev) => [...prev, {todo}])
  }

  function updateTodo(id,todo){
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id? todo : eachTodo )))
  }

  function deleteTodo(id){
    setTodos((prev) => prev.filter((eachTodo) => (eachTodo.id !== id)))
  }

  function toggleComplete(id){
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App
