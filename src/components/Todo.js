import React, { useState, useEffect } from "react"; // import useEffect for local storage
import { useSelector } from "react-redux";  // extract data from the Redux store state, using a selector function
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import { H1S, Paper, OLHover } from './Styles' // import styled-component

const Todo = () => {
  const todosList = useSelector((state) => state.todos); // extract data from the Redux store

  const [editField, setTitle] = useState('');

  // contitional rendering of all todos with edit or save button
  return (
    <>
      <div className="pt-4 ">
        <H1S><Paper><b> To Do List!</b></Paper></H1S>
      </div>
      <div className="row mt-5 mx-0">
        <div className="col-6 offset-3">
          <AddTodo />
        </div>
      </div>
      <div className="row mt-5 mx-0">
        <div className="col-8 offset-2">
          <OLHover className="w-100">
            {/* map through state and display items as text or input editing field */}
            {todosList.map((td) => {
              let todoText = !td.isEdit
                ?
                td.todo
                :
                (<input className="updateInput" type="text" id="edittodo" defaultValue={td.todo} onChange={e => setTitle(e.target.value)} />)


              return (
                <li key={td.id} className="my-2">
                  <div className="row">
                    <div className="col-9">
                      {todoText}
                    </div>
                    <div className="col-3 text-right pr-2">
                      <UpdateTodo todoItem={td} editField={editField} />
                      <DeleteTodo todoItem={td} />
                    </div>
                  </div>
                </li>
              );
            })}
          </OLHover>
        </div>
      </div>
    </>
  );
};

export default Todo;
