import React from "react";
import todopng from './assets/todo.png'; // Tell webpack this JS file uses this image
import { H1S, Paper, DivSC } from './components/Styles' // import styled-component


const App = () => {
  return (
    <>
      <div className="container-fluid px-0 mx-0">
        <div className="row px-0 mx-0">
          <div className="col px-0 mx-0">
            <DivSC className="pt-4 ">
              <H1S><Paper><b> Navigate to the TodoList link to view the app!</b></Paper></H1S>

              <img className="center mt-5" src={todopng} alt="todo" />;
            </DivSC>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
