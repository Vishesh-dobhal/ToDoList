/*import { useState, useEffect } from "react";

function ToDoLi() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodo(savedTodos);
    }
  }, []);

  const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function createTodo() {
    const updatedTodo = [...todo, val];
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
    setVal("");
  }

  function deleteTodo(index) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-todo-bg bg-cover bg-center"
    >
      
      <div
        style={{ backgroundColor: "#e9d5ff" }}
        className="p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={val}
            placeholder="Enter Task..."
            onChange={(e) => setVal(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-purple-100 text-black px-4 py-2 rounded-md hover:bg-purple-600 transition duration-200"
          onClick={createTodo}
        >
          Add
        </button>
        

        <div className="mt-4">
          {todo.map((todoItem, i) => {
            return (
              <div
                key={i}
                className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded-lg shadow"
              >
                <p className="text-gray-800">{todoItem}</p>
                <button
                  className="bg-purple-400 text-white px-3 py-1 rounded hover:bg-purple-900 transition-colors"
                  onClick={() => deleteTodo(i)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ToDoLi; */



import { useState, useEffect } from "react";

function ToDoLi() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodo(savedTodos);
    }
  }, []);

  const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function createTodo() {
    const updatedTodo = [...todo, val];
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
    setVal("");
  }

  function deleteTodo(index) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-todo-bg bg-cover bg-center px-4 sm:px-6">
      <div
        style={{ backgroundColor: "#e9d5ff" }}
        className="p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-lg"
            value={val}
            placeholder="Enter Task..."
            onChange={(e) => setVal(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-purple-100 text-black px-4 py-2 rounded-md hover:bg-purple-600 transition duration-200 sm:py-3 sm:text-lg"
          onClick={createTodo}
        >
          Add
        </button>

        <div className="mt-4">
          {todo.map((todoItem, i) => {
            return (
              <div
                key={i}
                className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded-lg shadow sm:text-lg"
              >
                <p className="text-gray-800">{todoItem}</p>
                <button
                  className="bg-purple-400 text-white px-3 py-1 rounded hover:bg-purple-900 transition-colors sm:px-4 sm:py-2"
                  onClick={() => deleteTodo(i)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ToDoLi;
