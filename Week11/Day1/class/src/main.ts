function HelloWorld(username: string) {
  // let username = "Hii";
  console.log(username);
  // username = 5;
  // console.log(username);
}

HelloWorld("Hello");

const tup: [string, number] = ["ohoh", 4040]

const b = null;
const reg: RegExp = /\w+/g;

type customType = {
  name: string,
  age?: number,
}

const timmy: customType = {
  name: "Timmy",
  // age: 18
}

let statuscode: "failed" | "loading" | "pending";
statuscode = "failed";


enum Cell {
  CROSS = "X",
  NOUGHT = "O",
  EMPTY = " "
}

enum err {
  OK,
  NotFound,
}

function showTable(table: Cell[][]) {
  console.log(table[0][0]);
}

const doSomething: () => err = () => {
  if (...) {
    err.NotFound
  }
  //
  return err.OK;
}

function checkErrors(e: err) {
  if (e == err.OK) {
    return;
  }
  if (e === err.o NotFound) {
    // ...
  }
}