import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from '../features/todoListSlice'

export default configureStore({
  reducer: {
    todolist: todolistReducer
  },
})