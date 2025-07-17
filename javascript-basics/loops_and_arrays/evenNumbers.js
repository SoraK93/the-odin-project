const readlineSync = require("readline-sync");

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

let input;
do {
  input = Number(readlineSync.question("Enter a number greater than 100: "));
  if (input > 100) {
    console.log("Correct, You have provided the right number.");
    break;
  }
} while (input <= 100 && input);
