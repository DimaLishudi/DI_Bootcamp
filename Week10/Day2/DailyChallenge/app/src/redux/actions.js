export function selectDateAction(date) {
  return {
    type: "date/select",
    payload: {date},
  }
}

export function addTaskAction(text) {
  return {
      type: "task/add",
      payload: {text},
  }
}
export function removeTaskAction(id) {
  return {
      type: "task/remove",
      payload: {id},
  }
}

export function toggleTaskAction(id) {
  return {
      type: "task/toggle",
      payload: {id},
  }
}

export function editTaskAction(id, text) {
  return {
      type: "task/edit",
      payload: {id, text},
  }
}

