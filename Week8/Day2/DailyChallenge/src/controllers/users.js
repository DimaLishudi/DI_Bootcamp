import * as model from "../models/users.js"
import {resolveError, checkRequestFields} from "../errors/errors.js"


export function getAllUsers(req, res) {
    model.getAllUsers()
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function getUser(req, res) {
    model.getUser(req.params.id)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function updateUser(req, res) {
    try {
        checkRequestFields(req, ["id"])
    } catch (err) {
        resolveError(res, err);
        return;
    }

    model.updateUser(req.body)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}
