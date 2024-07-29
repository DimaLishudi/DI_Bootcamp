import { getData, setData } from "../config/db.js"
import { NotFoundError } from "../errors/errors.js";

function getTaskPosById(tasks, id) {
    const pos = tasks.findIndex((task) => task.id == id);
    if (pos === -1) {
        throw new NotFoundError(id);
    }
    return pos;
}

export function getAllTasks() {
    const data = getData();
    return data.tasks;
}

export function getTask(id) {
    const data = getData();
    const pos = getTaskPosById(data.tasks, id);
    return data.tasks[pos];
}

export function deleteTask(id) {
    const data = getData();
    const pos = getTaskPosById(data.tasks, id);
    const out = data.tasks[pos];
    data.tasks.splice(pos, 1);
    setData(data);
    return {id, ...out};
}

export function addTask({title, content, deadline}) {
    const data = getData();
    const task = {id: data.id, title, content, deadline};
    data.id++;
    data.tasks.push(task);
    setData(data);
    return task;
}

export function updateTask(id, task) {
    const data = getData();
    const pos = getTaskPosById(data.tasks, id);

    for (let field in task) {
        data.tasks[pos][field] = task[field];
    }
    setData(data);
    return data.tasks[pos];
}
