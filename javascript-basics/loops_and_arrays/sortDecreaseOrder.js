let arrNum = [5, 2, 1, -10, 8];
let arrStr = ["HTML", "JavaScript", "CSS"];

// ... your code to sort it in decreasing order
arrNum.sort((a, b) => b - a);
console.log(arrNum)

function copySorted(arr){
    const copy = [...arr];
    copy.sort();
    return copy;
}

let sorted = copySorted(arrStr);
console.log(sorted);
console.log(arrStr);