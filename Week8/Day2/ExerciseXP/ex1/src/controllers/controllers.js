import * as model from "../models/post.js"
import {HTTPError, DBError} from "../errors/errors.js"

function resolveError(res, err) {
    if (err instanceof HTTPError) {
        err.resolve(res);
    } else {
        (new DBError(err.message)).resolve(res);
    }
}


export function getAllPosts(req, res) {
    model.getAllPosts()
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function getPost(req, res) {
    model.getPostByID(req.params.id)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function createPost(req, res) {
    model.createPost(req.body)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function updatePost(req, res) {
    const id = req.params.id
    model.updatePost({id, ...req.body})
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}

export function deletePost(req, res) {
    model.deletePost(req.params.id)
        .then(res.json.bind(res))
        .catch(err => resolveError(res, err));
}
