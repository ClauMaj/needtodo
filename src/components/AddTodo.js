import React from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { addTodo } from "../actions/todoActions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoItem = {
      id: uuidv1(),
      todo: e.target[0].value,
      isEdit: false,
    };

    dispatch(addTodo(todoItem));

    e.target[0].value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">To do:</span>
          </div>
          <textarea className="todoInput form-control" type="text" aria-label="With textarea"></textarea>
          <div className="input-group-append">
            <button className="btn btn-success" type="submit">Add To do</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
