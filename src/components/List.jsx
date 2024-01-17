import React from "react";
import Item from "./Item";

const List = ({
  todo,
  value,
  setValue,
  deleteItem,
  edit,
  saveEditTodo,
  editTodo,
}) => {
  return (
    <div>
      <ul>
        {todo.map((elem) => (
          <Item
            editTodo={editTodo}
            saveEditTodo={saveEditTodo}
            todo={todo}
            value={value}
            setValue={setValue}
            deleteItem={deleteItem}
            {...elem}
            key={elem.id}
            edit={edit}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
