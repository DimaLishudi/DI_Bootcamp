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

const db = knex({
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
})

// async function getVersion() {
//   try {
//     const result = await db.raw("select version()");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// await getVersion();

// db("products")
//     .select("name")
//     .then(console.log)
//     .then((res) => { db.destroy(console.log("bye")) });

// await db.raw("SELECT * FROM products").then(console.log);

db("products")
    .select("*")
    .then(console.log)
    .then((res) => db.destroy(console.log("bye")));