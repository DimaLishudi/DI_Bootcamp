const fs = require("fs").promises

async function readFile(file_name) {
    return await fs.readFile(file_name, "utf-8");
}

// My writeFile implementation was exactly fs.writeFile, so I simplified it
const writeFile = fs.writeFile;

module.exports = { readFile, writeFile }