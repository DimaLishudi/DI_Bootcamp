import { db } from "../config/db.js"
import { NotFoundError } from "../errors/errors.js";

class User {
    constructor(id, email, username, first_name, last_name) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
    }
};

export async function getAllUsers() {
    const data = await db("users")
        .select("id", "email", "username", "first_name", "last_name");
    return data;
}

export async function getUser(id) {
    const out = await db("users")
        .select("id", "email", "username", "first_name", "last_name")
        .where("id", id)
        .first();
    if (out == undefined) {
        throw new NotFoundError(id);
    }
    return new User(id, out.email, out.username, out.first_name, out.last_name);
}

export async function updateUser({id, email, username, first_name, last_name}) {
    await db("users")
        .update({id, email, username, first_name, last_name})
        .where("id", id);
    return new User(id, email, username, first_name, last_name);
}
