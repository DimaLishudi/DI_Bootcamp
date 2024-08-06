import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  tasks: {},
};


function generateID() {
  return nanoid();
}


export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    selectDateAction: (state, action) => {
      state.selectedDate = action.payload.date;
    },

    addTaskAction: (state, action) => {
      const date = state.selectedDate;
      if (!date) {
        return;
      }
      if (state.tasks[date] === undefined) {
        state.tasks[date] = [];
      }
      state.tasks[date].push({
        id: generateID(),
        text: action.payload.text,
        isCompleted: false
      });
    },

    removeTaskAction: (state, action) => {
      const date = state.selectedDate;
      if (!date) {
        return;
      }
      state.tasks[date] = state.tasks[date].filter((value) => value.id !== action.payload.id)
    },

    editTaskAction: (state, action) => {
      const date = state.selectedDate;
      if (!date) {
        return;
      }
      const tasks = state.tasks[date]
      const idx = tasks.findIndex((value) => value.id === action.payload.id);
      if (idx === -1) {
        return;
      }
      tasks[idx].text = action.payload.text;
    },

    toggleTaskAction: (state, action) => {
      const date = state.selectedDate;
      if (!date) {
        return;
      }
      const tasks = state.tasks[date];
      const idx = tasks.findIndex((value) => value.id === action.payload.id);
      if (idx === -1) {
        return;
      }
      tasks[idx].isCompleted ^= true;
    },
  },
});

export const {
  selectDateAction,
  addTaskAction,
  removeTaskAction,
  toggleTaskAction,
  editTaskAction,
} = taskSlice.actions;

export default taskSlice.reducer;
