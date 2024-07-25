import { db } from "../config/db.js"
import { BookNotFoundError } from "../errors/errors.js";

class Book {
    constructor(id, title, author, publishedYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
};

export async function getAllBooks() {
    const data = await db("books").select("id", "title", "author", "publishedYear");
    return data;
}

export async function getBookByID(id) {
    const out = await db("books")
        .select("id", "title", "author", "publishedYear")
        .where("id", id)
        .first();
    if (out == undefined) {
        throw new BookNotFoundError(id);
    }
    return new Book(id, out.title, out.author, out.publishedYear);
}

export async function addBook({title, author, publishedYear}) {
    const [{id}] = await db("books").insert({title, author, publishedYear}, "id");
    return new Book(id, title, author, publishedYear);
}
