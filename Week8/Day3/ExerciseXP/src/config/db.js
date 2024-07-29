import "dotenv/config";
import dotenv from "dotenv";
import fs from "fs";


dotenv.config();
const { filename, encoding } = process.env;

// I use synchronous IO here to avoid concurrency issues here
// (e.g. two alternative writes to the file, making one write shadow the other)

// create file if it doesn't exist
try {
    const fd = fs.openSync(filename, "wx");
    const data = {id: 0, tasks: []}
    fs.writeFileSync(fd, JSON.stringify(data), {encoding});
} catch (err) {}

export function getData() {
    const data = fs.readFileSync(filename, {encoding});
    return JSON.parse(data);
}

export function setData(data) {
    fs.writeFileSync(filename, JSON.stringify(data), {encoding});
}