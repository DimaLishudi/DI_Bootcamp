import knex from "knex";
import "dotenv/config";
import dotenv from "dotenv";

dotenv.config();
const {
    PGHOST,
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
    PGPORT 
} = process.env;

export const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : PGHOST,
      user : PGUSER,
      password : PGPASSWORD,
      database : PGDATABASE,
      port: PGPORT,
      ssl: {rejectUnauthorized: false},
    },
});


if (!(await db.schema.hasTable("users"))) {
    console.log("Creating users table...");
    await db.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("email", 64);
        table.string("username", 64).unique();
        table.string("first_name", 64);
        table.string("last_name", 64);
    });
}

// I do not add username column here
// As I think it is safer to not store username and (hashed) password in the same table
if (!(await db.schema.hasTable("hashpwd"))) {
    console.log("Creating passwords table...");
    await db.schema.createTable("hashpwd", (table) => {
        table.increments("user_id").primary();
        table.foreign("user_id")
            .references("users.id")
            .deferrable("deferred")
            .onDelete("CASCADE");
        table.string("password", 128);
    });
}
