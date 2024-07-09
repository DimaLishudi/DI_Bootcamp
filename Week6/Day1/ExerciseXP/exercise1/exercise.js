// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// A: inside the funcOne function 3

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// A: Error at line a = 3 (cannot reassign const);

// #2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// A: inside the funcThree function 0
// funcTwo()
// funcThree()
// A: inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// A: error in funcTwo (reassigned const)


// #3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()
// A: inside the funcFive function hello


// #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix()
// A: inside the funcSix function test
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// A: the same (inner variable a shadows outer a, so no error)

// #5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// A: in the if block 2
//    outside of the if block 5
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// A: Same thing (again, inner variable a shadows outer a)