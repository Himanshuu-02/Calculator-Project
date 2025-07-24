import React, { useState } from "react";
import "./List.css";
function ToDolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const TaskChanger = (e) => {
    setTask(e.target.value);
  };

  // [{
  //   id:2342342,
  //   title:"titile"
  // },]
  const TaskHandler = (e) => {
    e.preventDefault();
    if (!task) {
      console.log("Please enter a text");
      //button disable
      return;
    } else {
      setTasks([...tasks, { id: Date.now(), title: task }]);
      //   alert(`Task added: ${task}`);
      console.log(`Task added: ${task}`);
      setTask(""); /// jb hum ak baar kuch type krre hai then addkre hai uske baad text na dikhe isiliye mnee ye line use kii hai
    }
  };
  const DeleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  console.log(tasks);
  return (
    <div >
      <h1>A To do list app</h1>
      <div>
        <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={TaskChanger}
          className="taskstyle"
        />
        <button onClick={TaskHandler} className="taskbutton" disabled={!task}>
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.title}
              <button
                onClick={() => DeleteHandler(t.id)}
                className="deletebutton"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>

      </div>
      
    </div>
  );
}
export default ToDolist;
