import React, { useEffect, useState } from "react";
import List from "./components/List";
import Header from "./components/Header";

const App = () => {
  const [todo, setTodo] = useState([{ id: 1, tittle: "First Todo" }]);
  const [todoTittle, setTodoTittle] = useState("");
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  // ! CREATE
  const addTodo = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        tittle: todoTittle,
        id: Date.now(),
      },
    ]);
    setTodoTittle("");
  };
  // ! READ
  useEffect(() => {
    const data = localStorage.getItem("todo");
    setTodo(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  console.log(todo);
  // ! DELETE
  const deleteItem = (id) => {
    const deleteTodo = todo.filter((e) => e.id !== id);
    setTodo(deleteTodo);
  };
  // ! EDIT
  const editTodo = (id, value) => {
    setEdit(id);
    setValue(value);
  };
  const saveEditTodo = (id) => {
    const newTodo = todo.map((elem) => {
      if (elem.id === id) {
        elem.tittle = value;
      }
      return elem;
    });
    setTodo(newTodo);
    setEdit(null);
  };
  return (
    <div>
      <div className="container">
        <h1>ToDo</h1>
        <p className="p">Crate a new todo</p>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              className="input_add"
              onChange={(e) => setTodoTittle(e.target.value)}
              value={todoTittle}
              type="text"
            />
          </form>
        </div>
      </div>

      <List
        saveEditTodo={saveEditTodo}
        todo={todo}
        value={value}
        setValue={setValue}
        deleteItem={deleteItem}
        edit={edit}
        editTodo={editTodo}
      />
      <Header />
    </div>
  );
};

export default App;
