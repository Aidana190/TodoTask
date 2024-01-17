import React from "react";

const Item = ({
  tittle,
  id,
  deleteItem,
  editTodo,
  edit,
  value,
  setValue,
  saveEditTodo,
}) => {
  const editTodoTittle = () => {
    editTodo(id, value);
  };

  console.log(id);

  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          {edit === id ? (
            <div>
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={value}
              />
            </div>
          ) : (
            <span>{tittle}</span>
          )}
          {edit === id ? (
            <div>
              <button onClick={() => saveEditTodo(id)}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteItem(id)}>Delete</button>
              <button onClick={editTodoTittle}>Edit</button>
            </div>
          )}
        </label>
      </li>
    </div>
  );
};
export default Item;
