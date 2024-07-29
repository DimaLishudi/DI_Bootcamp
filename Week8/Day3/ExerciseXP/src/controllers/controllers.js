import * as model from "../models/task.js"
import {resolveError, checkRequestFields} from "../errors/errors.js"

export function getAllTasks(req, res) {
    try {
        res.json(model.getAllTasks());
    } catch(err) {
        resolveError(res, err);
    }
}

export function getTask(req, res) {
    try {
        const out = model.getTask(parseInt(req.params.id))
        res.json(out);
    } catch(err) {
        resolveError(res, err);
    }
}

export function deleteTask(req, res) {
    try {
        const out = model.deleteTask(parseInt(req.params.id))
        res.json(out);
    } catch(err) {
        resolveError(res, err);
    }
}

export function addTask(req, res) {
    try {
        // content and deadline are not necessary
        checkRequestFields(req, ["title"]);
        const out = model.addTask(req.body)
        res.json(out);
    } catch(err) {
        resolveError(res, err);
    }
}

export function updateTask(req, res) {
    try {
        const out = model.updateTask(parseInt(req.params.id), req.body)
        res.json(out);
    } catch(err) {
        resolveError(res, err);
    }
}
