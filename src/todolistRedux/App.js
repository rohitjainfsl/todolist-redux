import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, formSubmit, deleteTask, editTask } from "./features/todoListSlice";

function App() {
  const init = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(formSubmit());
  }

  function handleDelete(e, index) {
    e.preventDefault();
    dispatch(deleteTask(index));
  }

  function handleEdit(e, index, task){
    e.preventDefault();
    dispatch(editTask({task: task, index: index}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={init.inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        ></input>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {init.tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <a href="?" onClick={(e) => handleDelete(e, index)}>
                Delete
              </a>
              <a href="?" onClick={(e) => handleEdit(e, index, task)}>
                Edit
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
