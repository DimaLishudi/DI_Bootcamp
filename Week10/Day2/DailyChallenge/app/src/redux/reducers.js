import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  tasks: {},
};

function generateID() {
  return nanoid();
}

function selectDate(prevState, action) {
  const state = {...prevState};
  state.selectedDate = action.payload.date;
  return state;
}

function addTask(prevState, action) {
  const date = prevState.selectedDate;
  if (!date) {
    return prevState;
  }

  const state = {...prevState};
  state.tasks = {...state.tasks};

  if (state.tasks[date] === undefined) {
    state.tasks[date] = [];
  } else {
    state.tasks[date] = [...state.tasks[date]];
  }

  state.tasks[date].push({
    id: generateID(),
    text: action.payload.text,
    isCompleted: false
  });
  return state;
}

function removeTask(prevState, action) {
  const date = prevState.selectedDate;
  if (!date) {
    return prevState;
  }

  const state = {...prevState};
  state.tasks = {...state.tasks};

  state.tasks[date] = state.tasks[date].filter((value) => value.id !== action.payload.id);
  return state;
}

function editTask(prevState, action) {
  const date = prevState.selectedDate;
  if (!date) {
    return prevState;
  }

  const state = {...prevState};
  state.tasks = {...state.tasks};
  state.tasks[date] = [...state.tasks[date]];

  const tasks = state.tasks[date];
  const idx = tasks.findIndex((value) => value.id === action.payload.id);
  if (idx === -1) {
    return prevState;
  }
  tasks[idx] = {
    ...tasks[idx],
    text: action.payload.text,
  };
  return state;
}

function toggleTask(prevState, action) {
  const date = prevState.selectedDate;
  if (!date) {
    return prevState;
  }

  const state = {...prevState};
  state.tasks = {...state.tasks};
  state.tasks[date] = [...state.tasks[date]];
  const tasks = state.tasks[date];

  const idx = tasks.findIndex((value) => value.id === action.payload.id);
  if (idx === -1) {
    return prevState;
  }
  tasks[idx] = {
    ...tasks[idx],
    isCompleted: !tasks[idx].isCompleted
  };
  return state;
}


export function taskReducer(state = initialState, action) {
  switch (action.type) {
      case "date/select":
        return selectDate(state, action);
      case "task/add":
        return addTask(state, action);
      case "task/remove":
        return removeTask(state, action);
      case "task/edit":
        return editTask(state, action);
        case "task/toggle":
          return toggleTask(state, action);
      default:
          return state
  }   
}

export default taskReducer;
