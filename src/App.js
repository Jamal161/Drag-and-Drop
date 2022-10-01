import logo from "./logo.svg";
import "./App.css";
import Style from "../src/style.css";


// var dragula = require('react-dragula');


import dragula from "dragula";



function App() {

  dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
    document.getElementById("trash"),
  ]);



  dragula([document.getElementById('left'), document.getElementById('right')])
    .on("drag", function (el) {
      el.className = el.className.replace("ex-moved", "");
    })
    .on("drop", function (el) {
      el.className += " ex-moved";
    })
    .on("over", function (el, container) {
      container.className += " ex-over";
    })
    .on("out", function (el, container) {
      container.className = container.className.replace("ex-over", "");
    });

  function addTask() {
    var inputTask = document.getElementById("taskText").value;
    console.log(inputTask);
    document.getElementById("to-do").innerHTML +=
      "<li class='task'><p>" + inputTask + "</p></li>";

    document.getElementById("taskText").value = "";
  }


  function emptyTrash() {
    document.getElementById("trash").innerHTML = "";
  }




  return (
    <div className="App">
      <h1>
        Drag & Drop
        <br />
        <span>Lean Kanban Board</span>
      </h1>
      <div class="add-task-container">
        <input
          type="text"
          maxlength="12"
          id="taskText"
          placeholder="New Task..."
          onKeyDown="if (event.onKeyCode == 13)
                        document.getElementById('add'). onClick()"
        />
        <button id="add" className="button add-button" onClick={addTask}>
          Add New Task
        </button>
      </div>

      <div className="main-container" >
        <ul className="columns">
          <li className="column to-do-column">
            <div className="column-header">
              <h4>To Do</h4>
            </div>
            <ul className="task-list" id="to-do">
              <li className="task">
                <p>Analysis</p>
              </li>
              <li className="task">
                <p>Coding</p>
              </li>
              <li className="task">
                <p>Card Sorting</p>
              </li>
              <li className="task">
                <p>Measure</p>
              </li>
            </ul>
          </li>

          <li className="column doing-column">
            <div className="column-header">
              <h4>Doing</h4>
            </div>
            <ul className="task-list" id="doing">
              <li className="task">
                <p>Hypothesis</p>
              </li>
              <li className="task">
                <p>User Testing</p>
              </li>
              <li className="task">
                <p>Prototype</p>
              </li>
            </ul>
          </li>

          <li className="column done-column">
            <div className="column-header">
              <h4>Done</h4>
            </div>
            <ul className="task-list" id="done">
              <li className="task">
                <p>Ideation</p>
              </li>
              <li className="task">
                <p>Sketches</p>
              </li>
            </ul>
          </li>

          <li className="column trash-column">
            <div className="column-header">
              <h4>Trash</h4>
            </div>
            <ul className="task-list" id="trash">
              <li className="task">
                <p>Interviews</p>
              </li>
              <li className="task">
                <p>Research</p>
              </li>
            </ul>
            <div className="column-button">
              <button className="button delete-button" onClick={emptyTrash}>
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );


}

export default App;
