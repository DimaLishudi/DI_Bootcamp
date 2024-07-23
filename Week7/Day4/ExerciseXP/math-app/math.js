export function min(arr) {   
    let result = null;
    for (let elem of arr) {
        if (result === null || elem < result) {
            result = elem;
        }
    }
    return result;
}

export function max(arr) {   
    let result = null;
    for (let elem of arr) {
        if (result === null || elem > result) {
            result = elem;
        }
    }
    return result;
}

export function sum(arr) {   
    return arr.reduce((prev, cur) => prev + cur, 0);
}
