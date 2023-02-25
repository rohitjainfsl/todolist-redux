import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todolist",
  initialState: {
    inputValue: "",
    tasks: [],
    editing: false,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    formSubmit: (state) => {
      if (state.editing) {
        state.tasks[state.editing] = state.inputValue;
        
      } else state.tasks = [...state.tasks, state.inputValue];
      state.inputValue = "";
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task, index) => {
        return index !== action.payload;
      });
    },
    editTask: (state, action) => {
      state.inputValue = action.payload.task;
      state.editing = action.payload.index;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInputValue, formSubmit, deleteTask, editTask } =
  todoListSlice.actions;

export default todoListSlice.reducer;
