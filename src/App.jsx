import { useState } from "react";
import React from "react";

function App() {
  const { task, setTask } = useState([]); //variables for our tasks
  const { newTask, setNewTask } = useState([]); //variables to update our task

  //Create a function that handles input in our to do list
  function handleInputChange(event) {

  }

  //Create a function that add task on our to do list
  function addtask() {

  }
  //create a function that delete a task
  function deleteTask() {
    
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-Li</h1>
      <div>
        <input type="text" placeholder="Enter a task..." value={newTask}  onChange={handleInputChange}/>
      </div>
    </div>
  );
}

export default App;
