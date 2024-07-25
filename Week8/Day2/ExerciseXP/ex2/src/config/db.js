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


if (!(await db.schema.hasTable("books"))) {
    console.log("Creating books table...");
    await db.schema.createTable("books", (table) => {
        table.increments("id").primary();
        table.string("title", 100);
        table.string("author", 100);
        table.integer("publishedYear");
    });
}
