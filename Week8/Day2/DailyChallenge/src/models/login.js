import { db } from "../config/db.js"
import { NotFoundError } from "../errors/errors.js";

export async function getPasswordHash(username) {
    const res = await db.raw(`
            SELECT users.id, hashpwd.password FROM hashpwd JOIN users
            ON hashpwd.user_id = users.id
            WHERE users.username = ?`,
        username);

    if (res.rows.length === 0) {
        throw new NotFoundError(username);
    }
    return res.rows[0];
}   

export async function registerUser({email, username, first_name, last_name}, hash) {
    const res = await db.transaction(async (trx) => {
        const [{id}, ] = await trx
            .insert({email, username, first_name, last_name}, "id")
            .into("users");
        return trx.insert({user_id: id, password: hash}, "user_id").into("hashpwd");
    });
    return res[0].id;
}
