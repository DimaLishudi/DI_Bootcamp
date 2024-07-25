import { db } from "../config/db.js"
import { PostNotFoundError } from "../errors/errors.js";

export class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
};

export async function getAllPosts() {
    // .orderBy("id")?
    const data = await db("blog").select("id", "title", "content");
    return data.map(({id, title, content}) => new Post(id, title, content))
}

export async function getPostByID(id) {
    const out = await db("blog")
        .select("id", "title", "content")
        .where("id", id)
        .first();
    if (out == undefined) {
        throw new PostNotFoundError(id);
    }
    return new Post(id, out.title, out.content);
}

export async function createPost({title, content}) {
    const [{id}] = await db("blog").insert({title, content}, "id");
    return new Post(id, title, content);
}

export async function updatePost({id, title, content}) {
    const out = await db("blog")
        .update({title, content}, ["id"])
        .where("id", id);

    if (out.length > 0) {
        return new Post(id, title, content);
    }
    throw new PostNotFoundError(id);
}

export async function deletePost(id) {
    if (await db("blog").del().where("id", id) > 0) {
        return "Deleted";
    }
    throw new PostNotFoundError(id);
}
