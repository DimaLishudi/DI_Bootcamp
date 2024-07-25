import * as model from "../models/post.js"
import {HTTPError, DBError} from "../errors/errors.js"

function resolveError(res, err) {
    if (err instanceof HTTPError) {
        err.resolve(res);
    } else {
        (new DBError(err.message)).resolve(res);
    }
}

export function getAllBooks(req, res) {
    model.getAllBooks()
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function getBook(req, res) {
    model.getBookByID(req.params.id)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function addBook(req, res) {
    model.addBook(req.body)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}