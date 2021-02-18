import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../actions/todoActions";
import { startUpdate } from "../actions/todoActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpanBadge } from './Styles';

const UpdateTodo = ({ todoItem, editField }) => {
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    console.log(e);
    let updatedItem = {
      id: todoItem.id,
      todo: editField || todoItem.todo,
    }
    dispatch(updateTodo(updatedItem));
  }
  let showEditSave = !todoItem.isEdit ? (
    <button className="btn button" onClick={() => dispatch(startUpdate(todoItem))}>
      <SpanBadge>
        <FontAwesomeIcon icon={["fas", "edit"]} color="orange" />
      </SpanBadge>
    </button>)
    : (
      <button className="btn" onClick={handleUpdate}>
        <SpanBadge>
          <FontAwesomeIcon icon={["fas", "save"]} color="green" />
        </SpanBadge>
      </button>);
  return (
    <>

      {showEditSave}
    </>
  );
};

export default UpdateTodo;
