import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpanBadge } from './Styles';

const DeleteTodo = ({ todoItem }) => {
  const dispatch = useDispatch();

  let showNoShow = !todoItem.isEdit ? "btn button" : "btn"
  // dispatch todo for deletion
  return (
    <>

      <button className={showNoShow} onClick={() => dispatch(deleteTodo(todoItem))}>
        <SpanBadge>
          <FontAwesomeIcon icon={["fas", "trash"]} color="red" />
        </SpanBadge>
      </button>
    </>
  );
};

export default DeleteTodo;
