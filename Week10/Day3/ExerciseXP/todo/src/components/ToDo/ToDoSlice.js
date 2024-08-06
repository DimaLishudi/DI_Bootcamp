import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};


function generateID() {
  return nanoid();
}


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDoAction: (state, action) => {
      state.todos.push({
        id: generateID(),
        text: action.payload.text,
        isCompleted: false
      });
    },
    removeToDoAction: (state, action) => {
      state.todos = state.todos.filter((value) => value.id !== action.payload.id)
    },
    toggleToDoAction: (state, action) => {
      const idx = state.todos.findIndex((value) => value.id === action.payload.id);
      if (idx === -1) {
        return;
      }
      state.todos[idx].isCompleted ^= true;
    },
  },
});

export const {
  addToDoAction,
  removeToDoAction,
  toggleToDoAction,
} = todoSlice.actions;

export default todoSlice.reducer;
